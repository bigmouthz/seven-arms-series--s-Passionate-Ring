using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SevenArmsSeries.Repositories.RDBMS;
using SevenArmsSeries.Repositories;

namespace Sales.Models
{
    
    #region ExamQuestion
    public class ExamQuestion 
    {
        public string ExamPaper { get; set; }

        public string Byname { get; set; }

        public decimal TotalFullScore { get; set; }

        public string LimitTime { get; set; }

        public string OwnerType { get; set; }

        public IList<Question> Questions { get; set; }
    }

    public class Question
    {
        #region relation columns
        public string GUID { get; set; }

        public string ExamPaper { get; set; }
        #endregion

        public string Code { get; set; }

        public string QuestionType { get; set; }

        public string QuestionContent{get; set;}

        public Decimal FullScore { get; set; }

        public string Comment { get; set; }

        public IList<QuestionItem> Items { get; set; }

        public IList<QuestionItem> Answers { get; set; }
    }

    public class QuestionItem 
    {
        #region relation columns
        public string GUID { get; set; }

        public string Question_GUID { get; set; }
        #endregion

        #region expand columns
        public string ExamPaper {get; set;}
      
        public string Code{get; set;}
       
        public string QuestionType{get; set;}
      
        public string QuestionContent{get; set;}
       
        public decimal FullScore{get; set;}

        public string Comment { get; set; }
        #endregion
        public string ItemOrder { get; set; }

        public string ItemAnswer { get; set; }

        public string Value { get; set; }

        public string ExpandValue { get; set; }

        public bool IsWrite { get; set; }
    }

    #endregion

    #region ExamAnswer

    public class ExamAnswer
    {
        #region relation columns
        public string GUID { get; set; }

        #endregion

        public string ExamPaper { get; set; }

        public string Byname { get; set; }

        public decimal TotalFullScore { get; set; }

        public string LimitTime { get; set; }

        public string UserCode { get; set; }

        public string ClientIP { get; set; }

        public string LeftTime { get; set; }

        public string RightTime { get; set; }

        public decimal TotalScore { get; set; }

        public IList<Answer> Answers { get; set; }
    }

    public class Answer
    {
        #region relation columns
        public string GUID { get; set; }

        public string Ref_ExamAnswer_GUID { get; set; }
        #endregion

        public string Code { get; set; }

        public decimal Score { get; set; }

        public string Comment { get; set; }

        public IList<AnswerItem> Answers { get; set; }
    }

    public class AnswerItem 
    {
        #region relation columns
        public string GUID { get; set; }

        public string Answer_GUID { get; set; }
        #endregion

        public string ItemOrder { get; set; }
        
        public string Value { get; set; }

        public string ExpandValue { get; set; }

        public string Ref_ExamAnswer_GUID { get; set; }

        public string Code { get; set; }

        public decimal Score { get; set; }

        public string Comment { get; set; }
    }

    #endregion

    public class ExamQuestionHelper
    {
        readonly string Flag = "Sales.Models.ExamQuestion";

        public ExamQuestionHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QuerySingleEntity = @"
SELECT [ExamPaper]
      ,[Byname]
      ,[TotalFullScore]
      ,[LimitTime]
      ,[OwnerType]
  FROM [exam].[dbo].[ExamQuestion]
where  [ExamPaper] = @ExamPaper ",
                                   QueryMoreEntity = @"
SELECT [ExamPaper]
      ,[Byname]
      ,[TotalFullScore]
      ,[LimitTime]
      ,[OwnerType]
from  [uf_ExamQuestion](@ownertype) x
Order by [Byname] Asc",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [uf_ExamQuestion](@ownertype) x ",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("Create", @"
Delete from [QuestionItem] 
where GUID in (
				select QuestionItem_GUID
				from dbo.view_ExamQuestion_OnePage
				where [ExamPaper]=@ExamPaper
			  );

Delete from [Question] where ExamPaper =@ExamPaper;

Delete from [ExamQuestion] where [ExamPaper]=@ExamPaper;

INSERT INTO [ExamQuestion]
           ([ExamPaper]
           ,[Byname]
           ,[TotalFullScore]
           ,[LimitTime]
           ,[OwnerType])
     VALUES
           (@ExamPaper
           ,@Byname
           ,@TotalFullScore
           ,@LimitTime
           ,@OwnerType)");
            }
        }

        public ExamQuestion GetRow(string ExamPaper)
        {
            QueryBySingleRequest request = new QueryBySingleRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } },
            };
            QueryBySingleResponse<ExamQuestion> response = new QueryBySingle<ExamQuestion>().Get(request, ReposityEntityFactory.Items[Flag]);
            return response.Row;
        }

        public IList<ExamQuestion> GetRows(string ownertype)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@ownertype", Value = ownertype, Type = "string", } },
            };
            QueryByMoreResponse<ExamQuestion> response = new QueryByMore<ExamQuestion>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }

        public ResultMessage Create(string ExamPaper, string Byname, decimal TotalFullScore, string LimitTime, string OwnerType)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } ,
                    new RequestParameter() { Name = "@Byname", Value = Byname, Type = "string", } ,
                    new RequestParameter() { Name = "@TotalFullScore", Value = TotalFullScore.ToString(), Type = "decimal", } ,
                    new RequestParameter() { Name = "@LimitTime", Value = LimitTime, Type = "string", } ,
                    new RequestParameter() { Name = "@OwnerType", Value = OwnerType, Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class QuestionHelper
    {
        readonly string Flag = "Sales.Models.Question";

        public QuestionHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QueryMoreEntity = @"
SELECT [GUID]
      ,[ExamPaper]
      ,[Code]
      ,[QuestionType]
      ,[QuestionContent]
      ,[FullScore]
      ,[Comment]
from  [uf_Question](@exampaper) x
Order by [Code] Asc
 ",
                                   QueryCountEntity = @"
SELECT Count(*) CNT  
FROM   [uf_Question](@exampaper) x ",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("Create", @"
INSERT INTO [Question]
           ([GUID]
           ,[ExamPaper]
           ,[Code]
           ,[QuestionType]
           ,[QuestionContent]
           ,[FullScore]
           ,[Comment])
     VALUES
           (@GUID
           ,@ExamPaper
           ,@Code
           ,@QuestionType
           ,@QuestionContent
           ,@FullScore
           ,@Comment)");
            }
        }


        public IList<Question> GetRows(string exampaper)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@exampaper", Value = exampaper, Type = "string", } },
            };
            QueryByMoreResponse<Question> response = new QueryByMore<Question>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }

        public ResultMessage Create(string GUID, string ExamPaper, string Code, string QuestionType, string QuestionContent, decimal FullScore, string Comment)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@GUID", Value = GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } ,
                    new RequestParameter() { Name = "@Code", Value = Code, Type = "string", } ,
                    new RequestParameter() { Name = "@QuestionType", Value = QuestionType, Type = "string", } ,
                    new RequestParameter() { Name = "@QuestionContent", Value = QuestionContent, Type = "string", } ,
                    new RequestParameter() { Name = "@FullScore", Value = FullScore.ToString(), Type = "decimal", } ,
                    new RequestParameter() { Name = "@Comment", Value = Comment, Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class QuestionItemHelper
    {
        readonly string Flag = "Sales.Models.QuestionItem";

        public QuestionItemHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QueryMoreEntity = @"
SELECT [GUID]
      ,[Question_GUID]
      ,[ItemOrder]
      ,[ItemAnswer]
      ,[Value]
      ,[ExpandValue]
      ,[ExamPaper]
      ,[Code]
      ,[QuestionType]
      ,[QuestionContent]
      ,[FullScore]
      ,[Comment]
      ,[IsWrite]
from  [uf_QuestionItem](@exampaper) x
Order by [Code],[ItemOrder]",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [uf_QuestionItem](@exampaper) x ",
                               }
                            );


                ReposityEntityFactory.Items[Flag].Add("Create", @"
INSERT INTO [QuestionItem]
           ([GUID]
           ,[Question_GUID]
           ,[ItemOrder]
           ,[ItemAnswer]
           ,[Value]
           ,[ExpandValue]
           ,[IsWrite])
     VALUES
           (@GUID
           ,@Question_GUID
           ,@ItemOrder
           ,@ItemAnswer
           ,@Value
           ,@ExpandValue
           ,@IsWrite)");
            }
        }


        public IList<QuestionItem> GetRows(string exampaper)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@exampaper", Value = exampaper, Type = "string", } },
            };
            QueryByMoreResponse<QuestionItem> response = new QueryByMore<QuestionItem>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }


        public ResultMessage Create(string GUID, string Question_GUID, string ItemOrder, string ItemAnswer, string Value, string ExpandValue, bool IsWrite)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@GUID", Value = GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@Question_GUID", Value = Question_GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@ItemOrder", Value = ItemOrder, Type = "string", } ,
                    new RequestParameter() { Name = "@ItemAnswer", Value = ItemAnswer, Type = "string", } ,
                    new RequestParameter() { Name = "@Value", Value = Value, Type = "string", } ,
                    new RequestParameter() { Name = "@ExpandValue", Value = ExpandValue, Type = "string", } ,
                    new RequestParameter() { Name = "@IsWrite", Value = IsWrite.ToString(), Type = "bit", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class ExamAnswerHelper
    {
        readonly string Flag = "Sales.Models.ExamAnswer";

        public ExamAnswerHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QuerySingleEntity = @"
select [GUID]
      ,[ExamPaper]
	  ,[Byname]
	  ,[TotalFullScore]
	  ,[LimitMinute]
      ,[UserCode]
      ,[ClientIP]
      ,[LeftTime]
      ,[RightTime]
      ,[TotalScore] 
from  uf_ExamAnswer(@usercode) x
where  [ExamPaper] = @ExamPaper ",
                                   QueryMoreEntity = @"
select top 1 [GUID]
      ,[ExamPaper]
	  ,[Byname]
	  ,[TotalFullScore]
	  ,[LimitMinute]
      ,[UserCode]
      ,[ClientIP]
      ,[LeftTime]
      ,[RightTime]
      ,[TotalScore] 
from  uf_ExamAnswer(@usercode) x
Order by [Byname], [LeftTime] Desc ",
                                   QueryCountEntity = @"SELECT Count(*) CNT  from  uf_ExamAnswer(@usercode) x ",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("Create", @"
Delete from [ExamAnswer] where [GUID]=@GUID;
INSERT INTO [ExamAnswer]
           ([GUID]
           ,[ExamPaper]
           ,[UserCode]
           ,[ClientIP]
           ,[LeftTime]
           ,[RightTime]
           ,[TotalScore])
     VALUES
           (@GUID
           ,@ExamPaper
           ,@UserCode
           ,@ClientIP
           ,@LeftTime
           ,@RightTime
           ,@TotalScore)");
            };

              ReposityEntityFactory.Items[Flag].Add("IsExistsExamAnswer", @"
SELECT count(*) CNT
  FROM [ExamAnswer]
where [ExamPaper]=@ExamPaper
and   [UserCode]=@UserCode
and   (select count(*)
from dbo.ExamUser
where [ExamPaper]=@ExamPaper
and   [UserCode]=@UserCode
and   [IsTest] = 0
)>0");
            }

        public ResultMessage IsExistsExamAnswer(string ExamPaper, string UserCode)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = true;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } ,
                    new RequestParameter() { Name = "@UserCode", Value = UserCode, Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "IsExistsExamAnswer");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "您已经参加过该项测试，不能重复考试。如有需要，请联系培训招集人。" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "没有参加测试！" };
            }
        }

        public ExamAnswer GetRow(string usercode, string ExamPaper)
        {
            QueryBySingleRequest request = new QueryBySingleRequest()
            {
                Params = new List<RequestParameter>() 
                { 
                    new RequestParameter() { Name = "@usercode", Value = usercode, Type = "string", } ,
                    new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } 
                },
            };
            QueryBySingleResponse<ExamAnswer> response = new QueryBySingle<ExamAnswer>().Get(request, ReposityEntityFactory.Items[Flag]);
            return response.Row;
        }

        public IList<ExamAnswer> GetRows(string usercode)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() 
                { 
                    new RequestParameter() { Name = "@usercode", Value = usercode, Type = "string", } ,
                },
            };
            QueryByMoreResponse<ExamAnswer> response = new QueryByMore<ExamAnswer>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }

        public ResultMessage Create(string GUID, string ExamPaper, string UserCode, string ClientIP, string LeftTime, string RightTime, decimal TotalScore)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@GUID", Value = GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@ExamPaper", Value = ExamPaper, Type = "string", } ,
                    new RequestParameter() { Name = "@UserCode", Value = UserCode, Type = "string", } ,
                    new RequestParameter() { Name = "@ClientIP", Value = ClientIP, Type = "string", } ,
                    new RequestParameter() { Name = "@LeftTime", Value = LeftTime, Type = "string", } ,
                    new RequestParameter() { Name = "@RightTime", Value = RightTime, Type = "string", } ,
                    new RequestParameter() { Name = "@TotalScore", Value = TotalScore.ToString(), Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class AnswerHelper
    {
        readonly string Flag = "Sales.Models.Answer";

        public AnswerHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QueryMoreEntity = @"
select [GUID]
      ,[Ref_ExamAnswer_GUID]
      ,[Code]
      ,[Score]
      ,[Comment]
from  uf_Answer(@examanswerguid) x
order by [Code] asc
 ",
                                   QueryCountEntity = @"
SELECT Count(*) CNT  
FROM   uf_Answer(@examanswerguid) x ",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("Create", @"
Delete from [Answer] where [GUID]=@GUID;
INSERT INTO [Answer]
           ([GUID]
           ,[Ref_ExamAnswer_GUID]
           ,[Code]
           ,[Score]
           ,[Comment])
     VALUES
           (@GUID
           ,@Ref_ExamAnswer_GUID
           ,@Code
           ,@Score
           ,@Comment); ");
            }
        }


        public IList<Answer> GetRows(string examanswerguid)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@examanswerguid", Value = examanswerguid, Type = "string", } },
            };
            QueryByMoreResponse<Answer> response = new QueryByMore<Answer>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }

        public ResultMessage Create(string GUID, string Ref_ExamAnswer_GUID, string Code, decimal Score, string Comment)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@GUID", Value = GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@Ref_ExamAnswer_GUID", Value = Ref_ExamAnswer_GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@Code", Value = Code, Type = "string", } ,
                    new RequestParameter() { Name = "@Score", Value = Score.ToString(), Type = "string", } ,
                    new RequestParameter() { Name = "@Comment", Value = Comment, Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class AnswerItemHelper
    {
        readonly string Flag = "Sales.Models.AnswerItem";

        public AnswerItemHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QueryMoreEntity = @"
SELECT [GUID]
      ,[Answer_GUID]
      ,[ItemOrder]
      ,[Value]
      ,[ExpandValue]
      ,[Ref_ExamAnswer_GUID]
      ,[Code]
      ,[Score]
      ,[Comment]
from  uf_AnswerItem(@examanswerguid) x
Order by [Code],[Item]",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM uf_AnswerItem(@examanswerguid) x ",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("Create", @"
Delete from [AnswerItem] where [GUID]=@GUID;
INSERT INTO [AnswerItem]
           ([GUID]
           ,[Answer_GUID]
           ,[ItemOrder]
           ,[Value]
           ,[ExpandValue])
     VALUES
           (@GUID
           ,@Answer_GUID
           ,@ItemOrder
           ,@Value
           ,@ExpandValue); ");
            }
        }


        public IList<AnswerItem> GetRows(string examanswerguid)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@examanswerguid", Value = examanswerguid, Type = "string", } },
            };
            QueryByMoreResponse<AnswerItem> response = new QueryByMore<AnswerItem>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }

        public ResultMessage Create(string GUID, string Answer_GUID, string ItemOrder, string Value, string ExpandValue)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@GUID", Value = GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@Answer_GUID", Value = Answer_GUID, Type = "string", } ,
                    new RequestParameter() { Name = "@ItemOrder", Value = ItemOrder, Type = "string", } ,
                    new RequestParameter() { Name = "@Value", Value = Value, Type = "string", } ,
                    new RequestParameter() { Name = "@ExpandValue", Value = ExpandValue, Type = "string", } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "Create");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，提交失败！" };
            }
        }
    }

    public class ExamUser
    {
        public string UserCode { get; set; }

        public string ExamPaper { get; set; }

        public string ExamQuestionByname { get; set; }

        public string LeftDate { get; set; }

        public string RightDate { get; set; }
    }

    public class ExamUserHelper
    {
        readonly string Flag = "Sales.Models.ExamUser";

        public ExamUserHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                                   QueryMoreEntity = @"
SELECT 
 eu.[ExamPaper]
,eq.[Byname] [ExamQuestionByname]
,eu.[UserCode]
,eu.[LeftDate]
,eu.[RightDate]
FROM [ExamUser] eu inner join [ExamQuestion] eq on eu.[ExamPaper] = eq.[ExamPaper]
where convert(varchar(10),getdate(),120) >= eu.[LeftDate]
and   convert(varchar(10),getdate(),120) <= eu.[RightDate]
and   eu.[UserCode] = @UserCode
Order by ExamQuestionByname;",
                                   QueryCountEntity = @"
SELECT Count(*) CNT  
FROM [ExamUser] eu inner join [ExamQuestion] eq on eu.[ExamPaper] = eq.[ExamPaper]
where convert(varchar(10),getdate(),120) >= eu.[LeftDate]
and   convert(varchar(10),getdate(),120) <= eu.[RightDate]
and   eu.[UserCode] = @UserCode;",
                               }
                            );
            }
        }

        public IList<ExamUser> GetRows(string UserCode)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() { new RequestParameter() { Name = "@UserCode", Value = UserCode, Type = "string", } },
            };
            QueryByMoreResponse<ExamUser> response = new QueryByMore<ExamUser>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }


    public class User
    {
        public string UserCode { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string PWD { get; set; }
    }

    public class UserHelper
    {
        readonly string Flag = "Sales.Models.User";

        public UserHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "exam",
                               }
                            );


                ReposityEntityFactory.Items[Flag].Add("IsExistsUser", @"

SELECT Count(*) CNT
FROM [User] 
where ([UserCode] = @UserCode or [Email] = @Email) and [PWD]=@PWD; ");

            }
        }

        public ResultMessage Pass(User user)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = true;
            request.Params = new List<RequestParameter>() 
            {
                    new RequestParameter() { Name = "@UserCode", Value = user.UserCode, Type = "string",   } ,
                    new RequestParameter() { Name = "@Email", Value = user.Email, Type = "string",   } ,
                    new RequestParameter() { Name = "@PWD", Value = user.PWD, Type = "string",   } ,
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "IsExistsUser");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "登录成功！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "不存在该用户！" };
            }

        }
    }


}