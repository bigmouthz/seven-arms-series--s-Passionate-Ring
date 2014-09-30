
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Engine;

namespace SevenArmsSeries.PassionateRing.Service
{
    public partial class WorkflowService : IWorkflowService
    {
        /// <summary>
        /// 上下文
        /// </summary>
        public Context Context { get; set; }


        IUserComparer _uc = new IUserComparer();

        /// <summary>
        /// 得到用户对象
        /// </summary>
        /// <param name="userguid"></param>
        /// <returns></returns>
        public IUser GetUser(string userguid)
        {
            return this.Context.Store.GetUser(userguid);
        }

        /// <summary>
        /// 当前用户是否可以访问该流程实例活动
        /// </summary>
        /// <param name="wii"></param>
        /// <returns></returns>
        public bool IsEffective(WorkitemInstance wii)
        {
            ///是否大管理员
            if (this.Context.CurUser.IsAdministrator())
                return true;

            ///是否流程模型管理员
            if (wii.GetWorkflowInstance().GetWorkflow().IsAdministrators(this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的操作者
            if (wii.GetWorkflowInstance().GetWorkflow().IsLegalAuthor(this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的代理操作者
            if (wii.IsProxy && _uc.Equals(wii.ProxyUser, this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的潜在代理操作者
            return wii.IsEffectiveByProxyUser();
        }

        /// <summary>
        /// 工作项锁处理
        /// 对于已经加锁的超过锁定期的自动解锁，并重新上锁, 返回可处理流程权限为可控制状态
        /// 对于未加锁的直接上锁,返回可处理流程权限为可控制状态
        /// 对于已经加锁的在有效锁定期内的，返回处理流程权限为不可控制状态
        /// </summary>
        /// <param name="wii"></param>
        /// <returns>工作项只读状态</returns>
        public bool? EncodeLock(WorkitemInstance wii)
        {
            ///如果处理锁竞争状态， 如果无需上锁则直接退出
            if (!wii.GetActivity().IsLock)
            {
                return null;
            }

            ///如果还没有被锁过，则置初始锁
            var locker = wii.GetWorkflowInstance().GetWorkflowInstanceLock();
            if (locker == null || !locker.IsLock)
            {  
                return wii.GetWorkflowInstance().SaveWorkflowInstanceLock(new WorkitemLocker()
                {
                    User = this.Context.CurUser,
                    IsLock = true,
                    LoggedTime = DateTime.Now,
                });
            }

            ///超过设置时间自动解锁(默认单位为分钟)
            if (locker.LoggedTime.AddMinutes(this.Context.Config.LockMinute) >= DateTime.Now)
            {
                return wii.GetWorkflowInstance().SaveWorkflowInstanceLock(new WorkitemLocker()
                {
                    User = this.Context.CurUser,
                    IsLock = true,
                    LoggedTime = DateTime.Now,
                });
            }

            ///当前还在有效被锁的状态中
            return false;
        }

        /// <summary>
        /// 强制加锁
        /// </summary>
        /// <param name="wii"></param>
        /// <returns></returns>
        public bool? AdminLock(WorkitemInstance wii)
        {
            ///如果处理锁竞争状态， 如果无需上锁则直接退出
            if (!wii.GetActivity().IsLock)
            {
                return null;
            }

            return wii.GetWorkflowInstance().SaveWorkflowInstanceLock(new WorkitemLocker()
            {
                User = this.Context.CurUser,
                IsLock = true,
                LoggedTime = DateTime.Now,
            });
        }

        /// <summary>
        /// 解锁
        /// </summary>
        /// <param name="wii"></param>
        public bool? DecodeLock(WorkitemInstance wii)
        {

            var locker = wii.GetWorkflowInstance().GetWorkflowInstanceLock();
            if (locker == null) 
                return null;

            if (wii.GetActivity().IsLock
                &&
               locker.IsLock
                &&
                _uc.Equals(locker.User, this.Context.CurUser))
            {
                return wii.GetWorkflowInstance().SaveWorkflowInstanceLock(new WorkitemLocker()
                {
                    User = this.Context.CurUser,
                    IsLock = true,
                    LoggedTime = DateTime.Now,
                });
            }
            else
                return null;
        }

        /// <summary>
        /// 用途：得到流程模型
        /// </summary>
        /// <param name="workflowGuid">流程模型guid</param>
        /// <returns>流程模型</returns>
        public Workflow GetWorkflow(string workflowGuid)
        {
            return this.Context.Store.GetWorkflow(workflowGuid);
        }

        /// <summary>
        /// 用途：得到流程实例
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例guid</param>
        /// <returns>流程实例</returns>
        public WorkflowInstance GetWorkflowInstance(string workflowInstanceGuid)
        {
            var wfi = this.Context.Store.GetWorkflowInstance(workflowInstanceGuid);
            wfi.SetContext(this.Context);
            return wfi;
        }

        /// <summary>
        /// 用途：得到流程活动实例
        /// </summary>
        /// <param name="workitemInstanceGuid">流程活动实例guid</param>
        /// <returns>流程活动实例</returns>
        public WorkitemInstance GetWorkitemInstance(string workitemInstanceGuid)
        {
            WorkitemInstance wii = this.Context.Store.GetWorkitemInstance(workitemInstanceGuid);
            wii.SetContext(this.Context);
            return wii;
        }

        /// <summary>
        /// 用途：得到流程当前用户所参与的待处理的活动实例集
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例guid</param>
        /// <returns>流程活动实例</returns>
        public IEnumerable<WorkitemInstance> GetWorkitemInstances(string workflowInstanceGuid)
        {
            var wfi = this.GetWorkflowInstance(workflowInstanceGuid);
            var wiis = wfi.GetWorkitemInstnces();
            return wiis.Where((wii) =>
            {
                return (wii.WorkitemInstanceState == eWorkitemState.Ready || wii.WorkitemInstanceState == eWorkitemState.Running)
                    && ((wii.IsProxy == true && _uc.Equals(wii.ProxyUser, this.Context.CurUser))
                         ||
                        (wii.IsProxy == false && _uc.Equals(wii.User, this.Context.CurUser))
                       );
            });
        }

        /// <summary>
        /// 用途：保存流程实例的流程数据
        /// 范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动guid</param>
        /// <param name="dataEntity">流程中所用到的数据内容</param>
        /// <returns></returns>
        public ResultMessage SaveDataEntity(string workflowInstanceGuid, IDictionary<string, string> dataEntity)
        {
            WorkflowInstance wfi = this.GetWorkflowInstance(workflowInstanceGuid);
            ///加入权限控制大管理员|流程模型管理员
            if (!(this.Context.CurUser.IsAdministrator() || wfi.GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)))
                return new ResultMessage() { State = false, Message = "不在许可操作范围内！" };

            wfi.SetDataEntity(dataEntity);

            bool b = wfi.Save();
            if (b)
                return new ResultMessage() { State = true, Message = "保存流程数据成功！" };
            else
                return new ResultMessage() { State = false, Message = "保存流程数据失败！" };
        }

        /// <summary>
        /// 用途：为流程活动添加特殊步骤
        /// 范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动guid</param>
        /// <param name="attachmentTrainsitions">所添加的特殊步骤</param>
        /// <returns></returns>
        public ResultMessage SetAttachmentTrainsitions(string workitemInstanceGuid, IDictionary<string, eTransitionType> attachmentTrainsitions)
        {
            WorkitemInstance wii = this.GetWorkitemInstance(workitemInstanceGuid);
            ///加入权限控制大管理员|流程模型管理员
            if (!(this.Context.CurUser.IsAdministrator() || wii.GetWorkflowInstance().GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)))
                return new ResultMessage() { State = false, Message = "不在许可操作范围内！" };

            wii.AttachmentTrainsitions = attachmentTrainsitions;
            var b = wii.Save();
            if (b)
                return new ResultMessage() { State = true, Message = "设置特殊工作项成功！" };
            else
                return new ResultMessage() { State = false, Message = "设置特殊工作项失败！" };
        }

        /// <summary>
        ///  用途：撤回流程实例
        ///  范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workflowInstanceGuid"></param>
        /// <returns></returns>
        public ResultMessage RecallWorkflowInstance(string workflowInstanceGuid)
        {
            WorkflowInstance wfi = this.GetWorkflowInstance(workflowInstanceGuid);
            ///加入权限控制大管理员|流程模型管理员
            if (!(this.Context.CurUser.IsAdministrator() || wfi.GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)))
                return new ResultMessage() { State = false, Message = "不在许可操作范围内！" };
            ///不允许回收尚不在运行的流程实例
            if (wfi.WorkflowState.Equals(eWorkflowState.Running))
                return new ResultMessage() { State = false, Message = "该流程实例无需回收！" };
            wfi.Restart();
            bool b = wfi.Save();
            if (b)
                return new ResultMessage() { State = true, Message = "撤回流程实例成功！" };
            else
                return new ResultMessage() { State = false, Message = "撤回流程实例失败！" };
        }

        /// <summary>
        ///  用途：撤回流程活动
        ///  范围：大管理员|流程模型管理员|当前流程实例活动的操作者|当前流程实例活动的代理操作者
        /// </summary>
        /// <param name="workitemInstanceGuid"></param>
        /// <returns></returns>
        public ResultMessage RecallWorkitemInstance(string workitemInstanceGuid)
        {
            WorkitemInstance wii = this.GetWorkitemInstance(workitemInstanceGuid);

            ///加入权限控制大管理员|流程模型管理员|当前流程实例活动的操作者|当前流程实例活动的代理操作者
            if (!(this.Context.CurUser.IsAdministrator()
                || wii.GetWorkflowInstance().GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)
                || wii.User.Guid.Equals(this.Context.CurUser.Guid)
                || (wii.IsProxy && wii.ProxyUser.Guid.Equals(this.Context.CurUser.Guid))
                ))
                return new ResultMessage() { State = false, Message = "不在许可操作范围内！" };
            ///不允许回收尚不在运行的流程实例
            if (!wii.GetWorkflowInstance().WorkflowState.Equals(eWorkflowState.Running))
                return new ResultMessage() { State = false, Message = "该流程实例已经结束或者中止，请先回收流程实例再回收具体步骤！" };
            ///对尚在运行的流程实例无需回收
            if (wii.WorkitemInstanceState.Equals(eWorkitemState.Running)
                ||
                wii.WorkitemInstanceState.Equals(eWorkitemState.ExclusionCompleted)
                ||
                wii.WorkitemInstanceState.Equals(eWorkitemState.Ready))
                return new ResultMessage() { State = false, Message = "该流程活动无需回收！" };
            var nwiis = wii.GetNextWorkitemInstances();
            ///判断后继流程活动有无被处理，未处理的可以回收
            bool b = true;
            foreach (var t in nwiis)
            {
                if (t.WorkitemInstanceState.Equals(eWorkitemState.Abort)
                    ||
                    t.WorkitemInstanceState.Equals(eWorkitemState.Completed)
                    ||
                    t.WorkitemInstanceState.Equals(eWorkitemState.ExclusionCompleted)
                    )
                {
                    b = false;
                    break;
                }
            }
            if (!b)
                return new ResultMessage() { State = false, Message = "后继流程节点已经被处理，不能回收！" };
            ///进行回收
            for (int i = 0, cnt = nwiis.Count; i < cnt; i++)
            {
                nwiis[i].Save();
            }
            wii.Restart();
            wii.NextActivities = new List<NextActivity>();
            b = wii.Save(); 
            if (b)
                return new ResultMessage() { State = true, Message = "回收流程活动成功！" };
            else
                return new ResultMessage() { State = false, Message = "回收流程活动失败！" };
        }

        /// <summary>
        /// 用途：创建流程实例并返回首个流程活动工作项
        /// 约定：
        /// 1、一个流程有且仅有一个根活动
        /// 2、代理人不能发起委托人的新流程，只能处理委托日期后正在流转的流程数据
        /// 3、有发起流程模型权限方可以操作
        /// </summary>
        /// <param name="workflowGuid">流程模型guid</param>
        /// <returns>首个流程活动工作项</returns>
        public ResponseByWorkitem CreateWorkflowInstance(string workflowGuid, string name = null)
        {
            ///创建流程实例
            WorkflowInstance wfi = new WorkflowInstance(workflowGuid, name);
            //wfi.Guid ...
            //wfi.Name ...
            //wfi.WorkflowGuid ...
            wfi.Author = this.Context.CurUser;
            //wfi.WorkflowState ...
            //wfi.Participator ...
            //wfi.Locker ...
            //wfi.BeginTime ...;
            //wfi.EndTime ...;
            //wfi.DataEntity ...

            wfi.SetContext(this.Context);

            ///加入权限控制
            if (!(this.Context.CurUser.IsAdministrator()//是否大管理员
                  || wfi.GetWorkflow().IsAdministrators(this.Context.CurUser)//是否流程模型管理员
                  || wfi.GetWorkflow().IsLegalAuthor(this.Context.CurUser)//流程的合法发起用户
                  ))
            { return new ResponseByWorkitem() { CallBackMessage = new ResultMessage() { State = false, Message = "不能发起流程！" } }; }

            ///开启流程实例服务
            wfi.Start();
            wfi.Save();

            //创建活动实例
            WorkitemInstance wii = new WorkitemInstance(wfi.Guid, wfi.GetWorkflow().GetStartNode());
            //wii.Guid ...
            //wii.Name ...
            //wii.ActivityGuid ...
            //wii.WorkflowInstanceGuid ...
            //wii.AduitContent = "";
            //wii.AduitSign = "";
            //wii.ReadTime = null;
            //wii.NextActivities = null;
            wii.User = this.Context.CurUser;
            //wii.ProxyUser = null;
            //wii.IsProxy = false;
            //wii.WorkitemInstanceState ...
            //wii.FromWorkitemInstanceGuid = "";
            //wii.AttachmentTrainsitions = null;
            //wii.SelectVoteItem = "";
            //wii.OtherVoteItemContent = "";
            //wii.BeginTime ...;
            //wii.EndTime ...;
            //wii.DataEntity ...

            wii.SetContext(this.Context);
            ///开启活动实例
            wii.Start();
            wii.Save();
            ///活动前事件处理
            var rm = wii.BeforeTrigger();

            ResponseByWorkitem response;

            ///如果不满足
            if (!rm.State)
            {
                response = new ResponseByWorkitem()
                {
                    ActivityInstance = wii,
                    //NextMaybeActivities=null,
                    UIRight = this.Context.Config.RightByReadOnly,
                    CallBackMessage = rm,
                };
            }
            else
            {
                response = new ResponseByWorkitem()
                {
                    ActivityInstance = wii,
                    NextMaybeActivities = wii.GetNextEffectiveActivities(),
                    UIRight = wii.GetActivity().UIRight,
                    CallBackMessage = new ResultMessage() { State = true, Message = "" },
                };
            }
            return response;
        }

        /// <summary>
        /// 用途：界面请求初始化至流程服务，用于流程活动审批环节
        /// 约定：
        /// 1、系统管理员、当前流程模型管理员、当前流程实例活动操作者、当前流程实例活动委托人可以访问并打开
        /// 2、系统管理员、当前流程模型管理员可以对已经结束的流程实例环节进行处理，可以处理后继流程、修改数据等，但记录为管理员参与修改
        /// 3、当前流程实例活动操作者、当前流程实例活动委托人仅能在未处理完成的流程活动进行处理，可以处理后继流程、修改数据等
        /// 4、当前流程实例活动操作者、当前流程实例活动委托人对在处理完成的流程活动进行查阅操作
        /// </summary>
        /// <param name="workitemInstanceGuid"></param>
        /// <returns></returns>
        public ResponseByWorkitem GetDataByWorkitemInstance(string workitemInstanceGuid)
        {
            WorkitemInstance wii = this.GetWorkitemInstance(workitemInstanceGuid);

            ResponseByWorkitem response = new ResponseByWorkitem();

            ///判断是否非激活状态
            ///如果是非激活状态直接退出 
            if (!wii.IsActive())
            {
                response = new ResponseByWorkitem()
                {
                    ActivityInstance = wii,
                    NextMaybeActivities = null,
                    UIRight = this.Context.Config.RightByReadOnly,
                    CallBackMessage = new ResultMessage() { State = false, Message = "当前流程处理非活动状态" },
                };
                return response;
            }

            ///锁定处理
            bool? el = EncodeLock(wii);
            if (el.HasValue && el.Value)
            {
                if (wii.IsAdministratorProxy)
                {
                    AdminLock(wii);
                }
                else
                {
                    response.UIRight = this.Context.Config.RightByReadOnly;
                    response.CallBackMessage = new ResultMessage()
                    {
                        State = false,
                        Message = "流程被"
                            + wii.GetWorkflowInstance().GetWorkflowInstanceLock().User.Name + "锁定！"
                    };
                    return response;
                }
            }

            #region 可操作状态

            if (_uc.Equals(wii.User, this.Context.CurUser)) //判断是否是当前流程实例活动的操作人
            {
                response.ActivityInstance = wii;
                response.NextMaybeActivities = wii.GetNextEffectiveActivities();
                response.UIRight = wii.GetActivity().UIRight;
                response.CallBackMessage = new ResultMessage() { State = true, Message = "" };
            }
            else if (wii.IsProxy && _uc.Equals(wii.ProxyUser, this.Context.CurUser)) //判断是否是代理人
            {
                response.ActivityInstance = wii;
                response.NextMaybeActivities = wii.GetNextEffectiveActivities();
                response.UIRight = wii.GetActivity().UIRight;
                response.CallBackMessage = new ResultMessage() { State = true, Message = "代理人:" + this.Context.CurUser.Name + "参与处理！" };
            }
            else if (wii.IsProxy == false && wii.IsEffectiveByProxyUser())   //判断是否是潜在代理人 
            {
                wii.IsProxy = true;
                wii.ProxyUser = this.Context.CurUser;
                response.ActivityInstance = wii;
                response.NextMaybeActivities = wii.GetNextEffectiveActivities();
                response.UIRight = wii.GetActivity().UIRight;
                response.CallBackMessage = new ResultMessage() { State = true, Message = "代理人:" + this.Context.CurUser.Name + "首次参与处理！" };
            }
            else if (wii.GetWorkflowInstance().GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)) //流程模型管理员，同大管理员，但限于授权的流程模型
            {
                wii.IsAdministratorProxy = true;
                response.ActivityInstance = wii;
                response.NextMaybeActivities = wii.GetNextEffectiveActivities();
                response.UIRight = this.Context.Config.RightByFull;
                response.CallBackMessage = new ResultMessage() { State = true, Message = "流程管理员:" + this.Context.CurUser.Name + "参与处理！" };
            }
            else if (this.Context.CurUser.IsAdministrator())//大管理员，可以执行后继操作，可以改变流程状态
            {
                wii.IsAdministratorProxy = true;
                response.ActivityInstance = wii;
                response.NextMaybeActivities = wii.GetNextEffectiveActivities();
                response.UIRight = this.Context.Config.RightByFull;
                response.CallBackMessage = new ResultMessage() { State = true, Message = "系统管理员:" + this.Context.CurUser.Name + "参与处理！" };
            }
            else
            {
                response.ActivityInstance = null;
                response.NextMaybeActivities = null;
                response.UIRight = this.Context.Config.RightByReadOnly;
                response.CallBackMessage = new ResultMessage() { State = false, Message = "非法用户请求！" };
                ///设置解锁
                this.DecodeLock(wii);
                return response;
            }
            #endregion

            var rm = wii.BeforeTrigger();
            if (!rm.State)
            {
                response.UIRight = this.Context.Config.RightByReadOnly;
                response.CallBackMessage = new ResultMessage() { State = false, Message = rm.Message };
                ///设置解锁
                this.DecodeLock(wii);
                return response;
            }

            switch (wii.GetActivity().ActivityType)
            {
                #region ConvergeStart 如果为根结点处理则直接返回
                case eActivityType.ConvergeStart:
                    {
                        return response;
                    }
                #endregion

                #region  ConvergeWaitLeftComplete 汇聚结点判断[该结点的最近导入活动必须全部完成才允许执行激活本结点]
                case eActivityType.ConvergeWaitLeftComplete:
                    {
                        ///排除当前结点，默认能到本结点，即认为本结点之前的结点为结束状态
                        var wiis = wii.GetWorkflowInstance().GetWorkitemInstnces().Where((t) =>
                        {
                            return t.ActivityGuid == wii.ActivityGuid
                                && string.IsNullOrWhiteSpace(t.FromWorkitemInstanceGuid) == false
                                && t.Guid != wii.Guid;
                        });
                        bool b = true;
                        foreach (var t in wiis)
                        {
                            var pwii = this.GetWorkitemInstance(t.FromWorkitemInstanceGuid);
                            ///上一层次结点如有未完成，则返回false
                            if (pwii != null && pwii.IsActive())
                            {
                                b = false;
                                break;
                            }
                        }
                        ///之前有未完成处理的结点。则不能处理当前环节
                        if (!b)
                        {
                            response.UIRight = this.Context.Config.RightByReadOnly;
                            response.CallBackMessage = new ResultMessage() { State = false, Message = "本节点之前还有尚未处理完成之步骤！不能进行后续处理。" };
                            ///设置解锁
                            this.DecodeLock(wii);
                            return response;
                        };
                        return response;
                    }
                #endregion

                #region ConvergeWaitConditionComplete 该结点的所有导入活动进行条件判断，只有满足条件的才允许激活本结点
                case eActivityType.ConvergeWaitConditionComplete:
                    {
                        break;
                    }
                #endregion

                #region ConvergeWaitAllComplete 该结点的所有导入活动必须全部完成才允许执行激活本结点
                case eActivityType.ConvergeWaitAllComplete:
                    {
                        break;
                    }
                #endregion

                #region ConvergeCoerceComplete 无论该结点的所有导入活动完成与否直接激活本结点，关闭直接导入活动结点
                case eActivityType.ConvergeCoerceComplete:
                    {
                        break;
                    }
                #endregion

                #region ConvergeEnd 无论该结点的前的所有活动完成与否直接激活本结点，关闭流程运行
                case eActivityType.ConvergeEnd:
                    {
                        break;
                    }
                #endregion

                #region  Concurrency 并发处理，1、该结点可以由多人同时处理，即有多个结点实例存在 2、如果后继无汇聚处理则流程存在散发状态
                case eActivityType.Concurrency:
                    {
                        break;
                    }
                #endregion

                #region ConcurrencyVote 投票处理 1、投票结点是特殊的并发结点 2、投标结点有相应的扩展字段来实现对投票的显示统计处理
                case eActivityType.ConcurrencyVote:
                    {
                        response.VoteItems = ((ActivityByConcurrencyVote)wii.GetActivity()).VoteItems;
                        response.CallBackMessage = new ResultMessage() { State = true, Message = "请参与投票处理！" };
                        break;
                    }
                #endregion

                #region ConcurrencyExclusion 竞争处理[1、竞争结点是更为特殊的并发结点，结点有多个实例，但是实例必须只有一可以处理，其它的实例就为排斥关闭状态 2、多个人让最先见到的人处理]
                case eActivityType.ConcurrencyExclusion:
                    {
                        var pwii = this.GetWorkitemInstance(wii.FromWorkitemInstanceGuid);
                        foreach (var pna in pwii.NextActivities)
                        {
                            ///同组别的,置为竞争关闭状态
                            if (!pna.WorkitemInstanceGuid.Equals(wii.Guid)
                                &&
                                pna.ActivityGuid == wii.ActivityGuid)
                            {
                                var t = this.GetWorkitemInstance(pna.WorkitemInstanceGuid);
                                t.ConcurrencyExclusion();
                                t.Save();
                            }
                        }
                        break;
                    }
                #endregion
                default:
                    break;
            }

            wii.Save();
            return response;
        }

        /// <summary>
        /// 用途：当界面里的业务数据变化时，得到下一能达到的下一活动节点集
        /// 范围：对当前流程活动可操作的用户
        /// 约定：对于查阅权限返回null
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动标识</param>
        /// <returns>下一能达的活动节点集</returns>
        public IList<MaybeActivity> GetMaybeActivities(string workitemInstanceGuid)
        {
            WorkitemInstance wii = this.GetWorkitemInstance(workitemInstanceGuid);

            ///不在许可范围之内的，直接返回null
            if (!this.IsEffective(wii)) return new List<MaybeActivity>();

            if (wii.User.Guid.Equals(this.Context.CurUser.Guid)) //判断是否是当前流程实例活动的操作人
            {
                return wii.GetNextEffectiveActivities();
            }
            else if (wii.IsProxy && wii.ProxyUser.Guid.Equals(this.Context.CurUser.Guid)) //判断是否是代理人
            {
                return wii.GetNextEffectiveActivities();
            }
            else if (wii.IsProxy == false && wii.IsEffectiveByProxyUser())   //判断是否是潜在代理人 
            {
                return wii.GetNextEffectiveActivities();
            }
            else if (wii.GetWorkflowInstance().GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc)) //流程模型管理员，同大管理员，但限于授权的流程模型
            {
                return wii.GetNextEffectiveActivities();
            }
            else if (this.Context.CurUser.IsAdministrator())//大管理员，什么情况下都可以执行后继操作，可以改变流程状态
            {
                return wii.GetNextEffectiveActivities();
            }
            return new List<MaybeActivity>();
        }

        /// <summary>
        /// 对MaybeActivity.UsersValue的处理
        /// </summary>
        /// <param name="usersvalue">进行处理得到返回的用户集</param>
        /// <returns></returns>
        public IList<IUser> GetUsers(string workitemInstanceGuid, IList<RuntimeProtomer> rangeByProtomer)
        {
            var wii = this.GetWorkitemInstance(workitemInstanceGuid);

            return this.Context.Parse.Protomer(wii.GetWorkflowInstance(), wii, rangeByProtomer);
        }

        /// <summary>
        /// 流程活动处理
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public ResultMessage SubmitWorkitemInstance(RequestBySubmitWorkitem request)
        {
            ResultMessage rm = new ResultMessage() { State = true, Message = "" };

            WorkitemInstance wii = this.GetWorkitemInstance(request.WorkitemInstanceGuid);
            ///不在许可范围之内的，直接返回失败
            if (!this.IsEffective(wii)) return new ResultMessage() { State = false, Message = "不在许可操作范围内！" };

            wii.AduitContent = request.AduitContent;
            wii.AduitSign = request.AduitSign;

            wii.SelectVoteItem = request.SelectVoteItem;
            wii.OtherVoteItemContent = request.OtherVoteItemContent;
            wii.IsProxy = request.IsProxyUser;
            if (wii.IsProxy)
            {
                wii.ProxyUser = this.Context.CurUser;
            }
            else
            {
                wii.User = this.Context.CurUser;
            }
            //wii.SetDataEntity(request.DataEntity);

            switch (request.State)
            {
                #region Running 挂起流程操作
                case eWorkitemState.Running:
                    {
                        wii.Hung();
                        wii.Save();
                    }
                    break;
                #endregion

                #region Abort 退出流程处理，中止流程
                case eWorkitemState.Abort:
                    {
                        #region 条件判断
                        bool b = false;
                        ///是否大管理员
                        if (this.Context.CurUser.IsAdministrator())
                            b = true;
                        ///是否流程模型管理员
                        if (wii.GetWorkflowInstance().GetWorkflow().Administrators.Contains(this.Context.CurUser, _uc))
                            b = true;
                        ///是否是流程发起人
                        if (_uc.Equals(this.Context.CurUser, wii.GetWorkflowInstance().Author))
                            b = true;
                        if (!b)
                        {
                            rm.State = false;
                            rm.Message = "你不具体中止流程的权限。只有管理员和发起人才可以中止流程！";
                            break;
                        }
                        #endregion

                        wii.Abort();
                        wii.Save();
                        wii.GetWorkflowInstance().Save();
                        break;
                    }
                #endregion

                #region Completed 正常完成流程处理
                case eWorkitemState.Completed:
                    {
                        wii.GetWorkflowInstance().SetDataEntity(request.DataEntity);

                        #region 创建后继流程活动工作项
                        IList<NextActivity> tmp = new List<NextActivity>();
                        foreach (var na in request.NextActivities)
                        {
                            foreach (var o in na.Operaters)
                            {
                                var x = new NextActivity()
                                {
                                    WorkitemInstanceGuid = System.Guid.NewGuid().ToString(),
                                    ActivityGuid = na.Activity,
                                    ActivityByname = na.ActivityName,
                                    User = this.GetUser(o),
                                };

                                #region 创建后继流程活动工作项
                                WorkitemInstance xwii = new WorkitemInstance(wii.GetWorkflowInstance().Guid,
                                    wii.GetWorkflow().GetActivity(na.Activity, eDaoItem.Guid))
                                {
                                    ActivityGuid = x.ActivityGuid,
                                    AduitContent = "",
                                    ReadTime = null,
                                    NextActivities = null,
                                    EndTime = null,
                                    User = x.User,
                                    ProxyUser = null,
                                    //WorkitemInstanceState = eWorkitemState.Ready,
                                    IsProxy = false,
                                    FromWorkitemInstanceGuid = wii.Guid,
                                    AttachmentTrainsitions = null,
                                };
                                xwii.SetContext(this.Context);
                                ///取流程实例数据到流程实例活动
                                xwii.Start();
                                //xwii.BeforeTrigger();
                                xwii.Save();
                                #endregion
                                tmp.Add(x);
                            }
                        }
                        wii.NextActivities = tmp;
                        #endregion

                        ///完成流程实例活动
                        wii.AfterTrigger();
                        wii.Save();
                        wii.GetWorkflowInstance().Save();
                        break;
                    }
                #endregion

                #region Other
                case eWorkitemState.Ready:
                case eWorkitemState.ExclusionCompleted:
                default:
                    {
                        break;
                    }
                #endregion
            }
            ///解锁
            this.DecodeLock(wii);
            if (!rm.State)
                return rm;

            return rm;
        }

    }

}
