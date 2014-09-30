using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sales.Models;

namespace Sales.Controllers
{
    public class RequestGetExamQuestion
    {
        public string ExamPaper { get; set; }
    }

    public class RequestGetExamQuestions
    {
        public string OwnerType { get; set; }
    }

    public class RequestGetExamAnswer
    {
        public string usercode { get; set; }
        public string ExamPaper { get; set; }
    }

    public class RequestIsExistsExamAnswer
    {
        public string UserCode { get; set; }
        public string ExamPaper { get; set; }
    }

    public class RequestGetExamUsers
    {
        public string UserCode { get; set; }
    }

    public class ExamController : ApiController
    {
        /// <summary>
        /// http://localhost:2168/api/Exam/GetUser
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage GetUser(User request)
        {
            UserHelper uh = new UserHelper();
            ResultMessage us = uh.Pass(request);
            return us;
        }

        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamUsers
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public IList<ExamUser> GetExamUsers(RequestGetExamUsers request)
        {
            ExamUserHelper euh = new ExamUserHelper();
            IList<ExamUser> eus = euh.GetRows(request.UserCode);
            return eus;
        }



        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamQuestions
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public IList<ExamQuestion> GetExamQuestions(RequestGetExamQuestions request)
        {
            ExamQuestionHelper eqh = new ExamQuestionHelper();
            IList<ExamQuestion> eqs = eqh.GetRows(request.OwnerType);
            return eqs;
        }

        /// <summary>
        /// http://localhost:2168/api/Exam/IsExistsExamAnswer
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage IsExistsExamAnswer(RequestIsExistsExamAnswer request) 
        {
            ExamAnswerHelper eah = new ExamAnswerHelper();
            var result = eah.IsExistsExamAnswer(request.ExamPaper, request.UserCode);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamQuestion
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ExamQuestion GetExamQuestion(RequestGetExamQuestion request)
        {
            ExamQuestionHelper eqh = new ExamQuestionHelper();
            ExamQuestion eq = eqh.GetRow(request.ExamPaper);

            QuestionHelper qh = new QuestionHelper();
            eq.Questions = qh.GetRows(request.ExamPaper);

            QuestionItemHelper qih = new QuestionItemHelper();
            var qis = qih.GetRows(request.ExamPaper);

            Dictionary<string, IList<QuestionItem>> items = new Dictionary<string,IList<QuestionItem>>();
            Dictionary<string, IList<QuestionItem>> answers = new Dictionary<string,IList<QuestionItem>>();

            foreach (var qi in qis) 
            {
                if (!items.ContainsKey(qi.Code)) 
                {
                    items.Add(qi.Code, new List<QuestionItem>());
                }
                 if (!answers.ContainsKey(qi.Code)) 
                {
                    answers.Add(qi.Code, new List<QuestionItem>());
                }
                items[qi.Code].Add(qi);
                if (!string.IsNullOrWhiteSpace(qi.Value)) 
                {
                    answers[qi.Code].Add(qi);
                }
            }

            foreach (var q in eq.Questions) 
            {
                q.Items = items[q.Code];
                q.Answers = answers[q.Code];
            }

            return eq;
        }

        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamQuestion
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ExamAnswer GetExamAnswer(RequestGetExamAnswer request)
        {
            ExamAnswerHelper eah = new ExamAnswerHelper();
            ExamAnswer ea = eah.GetRow(request.usercode, request.ExamPaper);

            AnswerHelper ah = new AnswerHelper();
            ea.Answers = ah.GetRows(ea.GUID);

            AnswerItemHelper aih = new AnswerItemHelper();
            var ais = aih.GetRows(ea.GUID);

            Dictionary<string, IList<AnswerItem>> items = new Dictionary<string, IList<AnswerItem>>();

            foreach (var ai in ais)
            {
                if (!items.ContainsKey(ai.Code))
                {
                    items.Add(ai.Code, new List<AnswerItem>());
                }
                 items[ai.Code].Add(ai);
            }

            foreach (var a in ea.Answers)
            {
                a.Answers = items[a.Code];
            }

            return ea;
        }

        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamQuestion
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage SetExamAnswer(ExamAnswer request)
        {

            ExamAnswerHelper eah = new ExamAnswerHelper();
            ResultMessage result = eah.Create(request.GUID = Guid.NewGuid().ToString(), request.ExamPaper, request.UserCode, request.ClientIP, request.LeftTime, request.RightTime, request.TotalScore);
            if (!result.State) return result;

            AnswerHelper ah = new AnswerHelper();
            AnswerItemHelper aih = new AnswerItemHelper();
            if (request.Answers == null || request.Answers.Count == 0) return result;
            foreach(var a in request.Answers)
            {
                result = ah.Create(a.GUID = Guid.NewGuid().ToString(), a.Ref_ExamAnswer_GUID = request.GUID, a.Code, a.Score, a.Comment);
               if (!result.State) return result;

               if (a.Answers == null || a.Answers.Count==0) continue;
               foreach (var ai in a.Answers) 
               {
                   if (string.IsNullOrWhiteSpace(ai.ItemOrder)) continue;
                   result = aih.Create(ai.GUID = Guid.NewGuid().ToString(), ai.Answer_GUID = a.GUID, ai.ItemOrder, ai.Value, ai.ExpandValue);
                   if (!result.State) return result;
               }
            }
            return result;
        }


        /// <summary>
        /// http://localhost:2168/api/Exam/GetExamQuestion
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage SetExamQuestion(ExamQuestion request)
        {
            ExamQuestionHelper eqh = new ExamQuestionHelper();
            QuestionHelper qh = new QuestionHelper();
            QuestionItemHelper qih = new QuestionItemHelper();
            ResultMessage result = new ResultMessage();
            result = eqh.Create(request.ExamPaper, request.Byname, request.TotalFullScore, request.LimitTime, request.OwnerType);
            if (!result.State) return result;
            foreach (var q in request.Questions) 
            {
                var q_guid = Guid.NewGuid().ToString();
                result =  qh.Create(q_guid, request.ExamPaper, q.Code, q.QuestionType, q.QuestionContent, q.FullScore, q.Comment);
                if (!result.State) return result;

                if (q.Items == null || q.Items.Count == 0) continue;
                foreach (var qi in q.Items)
                {
                    if (string.IsNullOrWhiteSpace(qi.ItemOrder)) continue;

                    foreach (var qia in q.Answers) 
                    {
                        if (qi.ItemOrder == qia.ItemOrder) 
                        {
                            qi.Value = qia.Value;
                            qi.ExpandValue = qia.ExpandValue;
                            break;
                        }
                    }
                    result = qih.Create(Guid.NewGuid().ToString(), q_guid, qi.ItemOrder, qi.ItemAnswer, qi.Value, qi.ExpandValue, qi.IsWrite );
                    if (!result.State) return result;
                }
            }
            return result;
        }
    }
}
