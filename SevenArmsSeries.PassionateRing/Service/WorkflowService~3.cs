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

            bool b = this.SetWorkflowInstance(wfi, eStoreType.Update);
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
            var b = this.SetWorkitemInstance(wii, eStoreType.Update);
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
            bool b = this.SetWorkflowInstance(wfi, eStoreType.Update);
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
                this.SetWorkitemInstance(nwiis[i], eStoreType.Remove);
            }
            wii.Restart();
            wii.NextActivities = new List<NextActivity>();
            b = this.SetWorkitemInstance(wii, eStoreType.Update);
            if (b)
                return new ResultMessage() { State = true, Message = "回收流程活动成功！" };
            else
                return new ResultMessage() { State = false, Message = "回收流程活动失败！" };
        }

    }
}
