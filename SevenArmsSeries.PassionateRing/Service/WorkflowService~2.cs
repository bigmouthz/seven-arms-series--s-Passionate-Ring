using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Engine;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 与存储接口相关的
    /// </summary>
    public partial class WorkflowService : IWorkflowService
    {

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
            var wiis =  wfi.GetWorkitemInstnces();
            return wiis.Where((wii) =>
            {
                return (wii.WorkitemInstanceState == eWorkitemState.Ready || wii.WorkitemInstanceState == eWorkitemState.Running)
                    && ((wii.IsProxy == true && _uc.Equals(wii.ProxyUser, this.Context.CurUser))
                         ||
                        (wii.IsProxy ==false && _uc.Equals(wii.User, this.Context.CurUser))
                       );
            });
        }

        /// <summary>
        /// 保存工作流实例
        /// </summary>
        /// <param name="wfi"></param>
        /// <param name="storeType"></param>
        /// <returns></returns>
        bool SetWorkflowInstance(WorkflowInstance wfi, eStoreType storeType)
        {
            return this.Context.Store.SetWorkflowInstance(wfi, storeType);
        }

        /// <summary>
        /// 保存工作流活动实例
        /// </summary>
        /// <param name="wii"></param>
        /// <param name="storeType"></param>
        /// <returns></returns>
        bool SetWorkitemInstance(WorkitemInstance wii, eStoreType storeType)
        {
            return this.Context.Store.SetWorkitemInstance(wii, storeType);
        }


    }
}
