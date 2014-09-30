using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    public class Workflow : Dao
    {
        private Workflow() { }

        public Workflow(
            string guid,
            string code,
            string @name,
            IList<IProtomer> authors,
            IList<DataColumn> datacolumns,
            IList<Right> rights,
            IList<Activity> activities,
            IList<Transition> transtions,
            string imageurl,
            string resume
            )
        {
            this.Guid = guid;
            this.Code = code;
            this.Name = @name;
            this.Authors = authors;
            this.DataColumns = datacolumns;
            this.Rights = rights;
            this.Activities = activities;
            this.Transitions = transtions;
            this.Resume = resume;
            this.ImagesUrl = imageurl;
            foreach (var a in this.Activities)
            {
                a.SetWorkflow(this);
            }
            foreach (var t in this.Transitions)
            {
                t.SetWorkflow(this);
            }
        }

        #region properties
        /// <summary>
        /// 发起对象集
        /// </summary>
        public IList<IProtomer> Authors { get; set; }

        /// <summary>
        /// 流程数据集
        /// </summary>
        public IList<DataColumn> DataColumns { get; set; }

        /// <summary>
        /// 权限集
        /// </summary>
        public IList<Right> Rights { get; set; }

        /// <summary>
        /// 所有的活动
        /// </summary>
        /// <returns></returns>
        public IList<Activity> Activities { get; set; }

        /// <summary>
        /// 转换路线集
        /// </summary>
        public IList<Transition> Transitions { get; set; }

        /// <summary>
        /// 工作流文字描述
        /// </summary>
        public string Resume { get; set; }

        /// <summary>
        /// 流程图形
        /// </summary>
        public string ImagesUrl { get; set; }

        /// <summary>
        /// 流程管理员
        /// </summary>
        public IList<IUser> Administrators { get; set; }
        #endregion

        #region methods

        IUserComparer _uc = new IUserComparer();
        /// <summary>
        /// 是否流程管理员
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool IsAdministrators(IUser user)
        {
            if (this.Administrators == null || this.Administrators.Count == 0)
                return false;
            return this.Administrators.Contains(user, _uc);
        }

        /// <summary>
        /// 是否合法用户
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool IsLegalAuthor(IUser user)
        {
            if (this.Authors == null || this.Authors.Count == 0)
                return false;
            bool b = false;
            foreach (var author in this.Authors)
            {
                var users = author.GetUsers();
                if (users != null && users.Count > 0)
                {
                    b = users.Contains(user, _uc);
                    if (b) return true;
                }
            }
            return false;
        }

        private ActivityByConvergeStart _startnode;
        /// <summary>
        /// 得到起始结点
        /// </summary>
        /// <returns></returns>
        public ActivityByConvergeStart GetStartNode()
        {
            if (_startnode != null)
            {
                return _startnode;
            }
            foreach (var a in this.Activities)
            {
                if (a.ActivityType.Equals(eActivityType.ConvergeStart))
                {
                    _startnode = a as ActivityByConvergeStart ;
                    break;
                }
            }
            return _startnode;
        }
        
        /// <summary>
        /// 得到活动
        /// </summary>
        /// <param name="activityGuid"></param>
        /// <returns></returns>
        public Activity GetActivity(string activity, eDaoItem daoitem = eDaoItem.Guid )
        {
            switch (daoitem)
            {
                case eDaoItem.Guid:
                    return this.Activities.First((a) => { return a.Guid.Equals(activity); });
                case eDaoItem.Code:
                    return this.Activities.First((a) => { return a.Code.Equals(activity); });
                case eDaoItem.Name:
                default:
                    return this.Activities.First((a) => { return a.Name.Equals(activity); });
            }
        }

        /// <summary>
        /// 得到流程路线
        /// </summary>
        /// <param name="transitionGuid"></param>
        /// <returns></returns>
        public Transition GetTransition(string transition, eDaoItem daoitem = eDaoItem.Guid)
        {
            switch (daoitem)
            {
                case eDaoItem.Guid:
                    return this.Transitions.First((t) => { return t.Guid.Equals(transition); });
                case eDaoItem.Code:
                    return this.Transitions.First((t) => { return t.Code.Equals(transition); });
                case eDaoItem.Name:
                default:
                    return this.Transitions.First((t) => { return t.Name.Equals(transition); });
            }
        }

        #endregion

    }
}
