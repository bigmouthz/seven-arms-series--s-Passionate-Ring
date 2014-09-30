using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Engine;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Engine
{
    public interface IStore
    {
        /// <summary>
        /// 得到用户信息
        /// </summary>
        /// <param name="userGuid"></param>
        /// <returns></returns>
        IUser GetUser(string userGuid);

        /// <summary>
        /// 用途：得到流程模型
        /// </summary>
        /// <param name="workflowGuid">流程模型guid</param>
        /// <returns>流程模型</returns>
        Workflow GetWorkflow(string workflowGuid);

        #region 得到流程实例相关
        /// <summary>
        /// 用途：得到流程实例
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例guid</param>
        /// <returns>流程实例</returns>
        WorkflowInstance GetWorkflowInstance(string workflowInstanceGuid);
                
        /// <summary>
        /// 得到流程之锁
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <returns></returns>
        WorkitemLocker GetWorkflowInstanceLock(string workflowinstanceGuid);

        /// <summary>
        /// 得到流程之过程值
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <returns></returns>
        IDictionary<string, string> GetWorkflowInstanceDataEntity(string workflowinstanceGuid);

        /// <summary>
        /// 得到流程之参与者
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <returns></returns>
        HashSet<IUser> GetWorkflowInstanceParticipator(string workflowinstanceGuid);


        /// <summary>
        /// 用途：得到流程的所有活动实例
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例</param>
        /// <returns>得到流程的所有活动实例</returns>
        IList<WorkitemInstance> GetWorkflowInstancesWorkitemInstances(string workflowInstanceGuid);


        /// <summary>
        /// 保存工作流实例
        /// </summary>
        /// <param name="wfi"></param>
        /// <param name="storeType"></param>
        /// <returns></returns>
        bool SaveWorkflowInstance(WorkflowInstance wfi);

        /// <summary>
        /// 保存工作流活动实例
        /// </summary>
        /// <param name="wii"></param>
        /// <param name="storeType"></param>
        /// <returns></returns>
        bool SaveWorkitemInstance(WorkitemInstance wii);

        /// <summary>
        /// 保存工作流实例的锁状态
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <param name="locker"></param>
        /// <returns></returns>
        bool SaveWorkflowInstanceLock(string workflowinstanceGuid, WorkitemLocker locker);

        /// <summary>
        /// 保存工作流实例的值对象
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <param name="dataEntity"></param>
        /// <returns></returns>
        bool SaveWorkflowInstanceDataEntity(string workflowinstanceGuid, IDictionary<string, string> dataEntity);

        /// <summary>
        /// 保存工作流实例的之参与者
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <returns></returns>
        bool SaveWorkflowInstanceParticipator(string workflowinstanceGuid, HashSet<IUser> particioator);
        #endregion
        
        /// <summary>
        /// 用途：得到流程活动实例
        /// </summary>
        /// <param name="workitemInstanceGuid">流程活动实例guid</param>
        /// <returns>流程活动实例</returns>
        WorkitemInstance GetWorkitemInstance(string workitemInstanceGuid);

        /// <summary>
        /// 得到流程代理
        /// </summary>
        /// <param name="workflowProxyGuid"></param>
        /// <returns></returns>
        WorkflowProxy GetProxyWorkflow(string workflowProxyGuid);

        /// <summary>
        /// 得到所有流程模型相关的代理
        /// </summary>
        /// <param name="workflowGuid"></param>
        /// <returns></returns>
        IList<WorkflowProxy> GetProxyWorkflows(string workflowGuid);
        
        /// <summary>
        /// 保存流程代理
        /// </summary>
        /// <param name="wfp"></param>
        /// <param name="storeType"></param>
        /// <returns></returns>
        bool SaveProxyWorkflow(WorkflowProxy wfp);

    }
}
