using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Engine
{
    public class WorkitemInstance : DaoInstance
    {
        #region ctor
        /// <summary>
        /// Load时用
        /// </summary>
        public WorkitemInstance() { }

        /// <summary>
        /// Create时用
        /// </summary>
        /// <param name="workflowinstanceguid"></param>
        /// <param name="activity"></param>
        public WorkitemInstance(string workflowinstanceguid, Activity activity)
        {
            this.WorkflowInstanceGuid = workflowinstanceguid;
            this.Guid = System.Guid.NewGuid().ToString();
            this.SetActivity(activity);
        }
        #endregion

        #region properties


        /// <summary>
        /// 工作流实例标识
        /// </summary>
        public string WorkflowInstanceGuid { get; set; }

        /// <summary>
        /// 活动实例标识 
        /// </summary>
        public string ActivityGuid { get; set; }

        /// <summary>
        /// 审批意见
        /// </summary>
        public string AduitContent { get; set; }

        /// <summary>
        /// 审批签名
        /// </summary>
        public string AduitSign { get; set; }

        /// <summary>
        /// 第一次打开阅读的时间
        /// </summary>
        public DateTime? ReadTime { get; set; }

        /// <summary>
        /// 流转产生的下一转换活动实例标识
        /// </summary>
        public IList<NextActivity> NextActivities { get; set; }

        /// <summary>
        /// 当前操作用户
        /// </summary>
        public IUser User { get; set; }

        /// <summary>
        /// 当前代理用户
        /// </summary>
        public IUser ProxyUser { get; set; }

        /// <summary>
        /// 是否处理代理状态
        /// </summary>
        public bool IsProxy { get; set; }

        /// <summary>
        /// 是否管理员强制代理
        /// </summary>
        public bool IsAdministratorProxy { get; set; }

        /// <summary>
        /// 记录当前状态
        /// </summary>
        public eWorkitemState WorkitemInstanceState { get; private set; }

        /// <summary>
        /// 前一流程活动工作项标识
        /// </summary>
        public string FromWorkitemInstanceGuid { get; set; }

        /// <summary>
        /// 附加的后继活动
        /// Key:  活动标识
        /// Value:可操作状态
        /// </summary>
        public IDictionary<string, eTransitionType> AttachmentTrainsitions { get; set; }
        
        /// <summary>
        /// 选择的投票项
        /// </summary>
        public string SelectVoteItem { get; set; }

        /// <summary>
        /// 做为投票项之其他项时所填写的内容记录
        /// </summary>
        public string OtherVoteItemContent { get; set; }

        #endregion

        #region methods

        WorkflowInstance _workflowInstance;
        /// <summary>
        /// 得到当前的流程实例
        /// </summary>
        /// <returns></returns>
        public WorkflowInstance GetWorkflowInstance()
        {
            if (_workflowInstance == null)
            {
                _workflowInstance = this.GetContext().Store.GetWorkflowInstance(this.WorkflowInstanceGuid);
                _workflowInstance.SetContext(this.GetContext());
            }
            return _workflowInstance;
        }

        /// <summary>
        /// 保存工作流活动实例
        /// </summary>
        /// <returns></returns>
        public bool Save()
        {
            return this.GetContext().Store.SaveWorkitemInstance(this);
        }

        /// <summary>
        /// 得到流程模型
        /// </summary>
        /// <returns></returns>
        public Workflow GetWorkflow()
        {
            return this.GetWorkflowInstance().GetWorkflow();
        }

        Activity _activity;
        /// <summary>
        /// 得到流程活动
        /// </summary>
        /// <returns></returns>
        public Activity GetActivity()
        {
            if (_activity == null)
                _activity = this.GetWorkflow().GetActivity(this.ActivityGuid);
            return _activity;
        }

        /// <summary>
        /// 设置流程活动
        /// </summary>
        /// <param name="activity"></param>
        public void SetActivity(Activity activity)
        {
            this._activity = activity;
            this.Name = string.Format("[{0}]-{1}", DateTime.Now.ToString("yyyyMMddHHmmsss"), this._activity.Name);
            this.ActivityGuid = this._activity.Guid;
        }

           /// <summary>
        /// 得到下一活动实例集合
        /// </summary>
        /// <returns></returns>
        public IList<WorkitemInstance> GetNextWorkitemInstances()
        {
            IList<WorkitemInstance> wiis = new List<WorkitemInstance>();
            foreach (var na in this.NextActivities)
            {
                var wii = this.GetContext().Store.GetWorkitemInstance(na.WorkitemInstanceGuid);
                wii.SetContext(this.GetContext());
                wiis.Add(wii);
            }
            return wiis;
        }

        /// <summary>
        /// 是否激活状态
        /// </summary>
        /// <returns></returns>
        public bool IsActive()
        {
            return this.GetWorkflowInstance().WorkflowState == eWorkflowState.Running
                && (this.WorkitemInstanceState == eWorkitemState.Ready
                    ||
                    this.WorkitemInstanceState == eWorkitemState.Running
                    );
        }

        /// <summary>
        /// 启动
        /// </summary>
        public void Start()
        {
            this.WorkitemInstanceState = eWorkitemState.Ready;
            this.BeginTime = DateTime.Now;
        }

        /// <summary>
        /// 挂起
        /// </summary>
        public void Hung()
        {
            this.WorkitemInstanceState = eWorkitemState.Running;
        }

        /// <summary>
        /// 非正常终止
        /// </summary>
        public void Abort()
        {
            this.WorkitemInstanceState = eWorkitemState.Abort;
            this.EndTime = DateTime.Now;
        }

        /// <summary>
        ///  互斥性关闭（当同一活动节点由多人处理时，仅第一个先看到的处理，其它的被忽略掉]）
        /// </summary>
        public void ConcurrencyExclusion()
        {
            this.WorkitemInstanceState = eWorkitemState.ExclusionCompleted;
            this.EndTime = DateTime.Now;
        }

        /// <summary>
        /// 聚合结点关闭
        /// </summary>
        public void ConvergeComplete()
        {
            this.WorkitemInstanceState = eWorkitemState.ConvergeComplete;
            this.EndTime = DateTime.Now;
        }

        /// <summary>
        /// 访问活动实例时触发活动任务
        /// 一、可能触发流程外部的活动（扩展流程用）
        /// 二、可能修改流程内部的活动（修改流程数据用）
        /// </summary>
        public ResultMessage BeforeTrigger()
        {
            ResultMessage rm = new ResultMessage() ;
            var activity = this.GetActivity();
            if (activity != null)
            {
                foreach (var t in activity.Tasks)
                {
                    if (t.TaskTriggerType.Equals(eTaskTriggerType.Before))
                    {
                        rm = this.GetContext().Parse.Task(this.GetWorkflowInstance(),this,  t);
                        if (!rm.State) return rm;
                    }
                }
            }
            return new ResultMessage() { State = true, Message = "", };
        }

        /// <summary>
        /// 正常完成        
        /// 一、可能触发流程外部的活动（扩展流程用）
        /// 二、可能修改流程内部的活动（修改流程数据用）
        /// </summary>
        public ResultMessage AfterTrigger()
        {
            ResultMessage rm = new ResultMessage();
            var activity = this.GetActivity();
            if (activity != null)
            {
                foreach (var t in activity.Tasks)
                {
                    if (t.TaskTriggerType.Equals(eTaskTriggerType.After))
                    {
                        rm = this.GetContext().Parse.Task(this.GetWorkflowInstance(), this, t);
                        if (!rm.State) return rm;
                    }
                }
            }
            return new ResultMessage() { State = true, Message = "", };
         }

        /// <summary>
        /// 正常结束流程实例
        /// </summary>
        public void Completed()
        {
            this.WorkitemInstanceState = eWorkitemState.Completed;
            this.EndTime = DateTime.Now;
        }

        /// <summary>
        /// 重启流程
        /// </summary>
        public void Restart()
        {
           this.WorkitemInstanceState = eWorkitemState.Running;
        }


        /// <summary>
        /// 得到下一所有可达的活动
        /// </summary>
        /// <returns></returns>
        public IList<MaybeActivity> GetNextEffectiveActivities()
        {
            if (!IsActive()) return new List<MaybeActivity>();

            ///取得可达的 转移路线集
              var ts  = this.GetContext().Parse.Judgment(this.GetWorkflowInstance(), this, this.GetActivity().Judgment);
   
            ///添加转移路线集
            IDictionary<string, MaybeActivity> mbas = new Dictionary<string, MaybeActivity>();
            foreach (var t in ts)
            {
                if (!mbas.ContainsKey(t.RightActivity.Guid))
                {
                    mbas.Add(t.RightActivity.Guid, new MaybeActivity()
                    {
                        LeftActivityName = t.LeftActivity.Guid,
                        ActivityGuid = t.RightActivity.Guid,
                        ActivityByname = string.IsNullOrWhiteSpace(t.Name) ? t.RightActivity.Name : t.Name,
                        ActivityState = t.TransitionType,
                        TransitionGuid = t.Guid,
                        TransitionCode = t.Code,
                        TransitionName = t.Name, 
                        RangeByUser = this.GetContext().Parse.Protomer(this.GetWorkflowInstance(), this, t.RightActivity.Protomers),
                    });
                }
            }

            ///取得由管理员新加的路线集
            foreach (var a in this.AttachmentTrainsitions)
            {
                var t = this.GetWorkflowInstance().GetWorkflow().GetTransition(a.Key);
                if (t != null && !mbas.ContainsKey(t.RightActivity.Guid))
                {
                    mbas.Add(t.RightActivity.Guid, new MaybeActivity()
                    {
                        LeftActivityName = t.LeftActivity.Guid,
                        ActivityGuid = t.RightActivity.Guid,
                        ActivityByname = string.IsNullOrWhiteSpace(t.Name) ? t.RightActivity.Name : t.Name,
                        ActivityState = a.Value,
                        TransitionGuid = t.Guid,
                        TransitionCode = t.Code,
                        TransitionName = t.Name,
                        RangeByUser = this.GetContext().Parse.Protomer(this.GetWorkflowInstance(), this, t.RightActivity.Protomers),
                   });
                }
            }
            return mbas.Values.ToList();
        }

        /// <summary>
        /// 是否当前流程实例活动的潜在代理者
        /// </summary>
        /// <param name="wii"></param>
        /// <returns></returns>
        public bool IsEffectiveByProxyUser()
        {
            var wfps = this.GetContext().Store.GetProxyWorkflows(this.GetWorkflow().Guid);
            IUserComparer _uc = new IUserComparer();

            if (wfps == null)
            {
                return false;
            }

            return wfps.Any((wfp) =>
            {
                return wfp.BeginTime <= DateTime.Now && wfp.EndTime >= DateTime.Now && wfp.State == true
                    && _uc.Equals(wfp.Owner, this.User) && _uc.Equals(wfp.ProxyUser, this.GetContext().CurUser);
            });
        }
        #endregion
    }
}
