using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Engine;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 流程对外服务
    /// </summary>
    public interface IWorkflowService
    {
        #region WorkflowService 实现
        /// <summary>
        /// 上下文
        /// </summary>
        Context Context { get; set; }
        #endregion


        /// <summary>
        /// 用途：创建流程实例并返回首个流程活动工作项
        /// </summary>
        /// <param name="workflowGuid">流程模型</param>
        /// <param name="name">流程实例名称</param>
        /// <param name="code">流程实例编号</param>
        /// <returns>流程活动工作项</returns>
        ResponseByWorkitem CreateWorkflowInstance(string workflowGuid, string name = null);

        /// <summary>
        /// 用途：界面请求初始化至流程服务，用于流程活动审批环节
        /// </summary>
        /// <param name="workitemInstanceGuid"></param>
        /// <returns></returns>
        ResponseByWorkitem GetDataByWorkitemInstance(string workitemInstanceGuid);        

        /// <summary>
        /// 用途：当界面里的业务数据变化时，得到下一能达到的下一活动节点集
        /// 范围：对当前流程活动可操作的用户
        /// 约定：对于查阅权限返回null
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动标识</param>
        /// <returns>下一能达的活动节点集</returns>
        IList<MaybeActivity> GetMaybeActivities(string workitemInstanceGuid);

        /// <summary>
        /// 对MaybeActivity.UsersValue的处理
        /// </summary>
        /// <param name="usersvalue">进行处理得到返回的用户集</param>
        /// <returns></returns>
        IList<IUser> GetUsers(string workitemInstanceGuid, IList<RuntimeProtomer> rangeByProtomer);

        /// <summary>
        /// 流程活动处理
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        ResultMessage SubmitWorkitemInstance(RequestBySubmitWorkitem request);

        /// <summary>
        /// 用途：得到流程模型
        /// </summary>
        /// <param name="workflowGuid">流程模型guid</param>
        /// <returns>流程模型</returns>
        Workflow GetWorkflow(string workflowGuid);

        /// <summary>
        /// 用途：得到流程实例
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例guid</param>
        /// <returns>流程实例</returns>
        WorkflowInstance GetWorkflowInstance(string workflowInstanceGuid);

         /// <summary>
        /// 用途：得到流程活动实例
        /// </summary>
        /// <param name="workitemInstanceGuid">流程活动实例guid</param>
        /// <returns>流程活动实例</returns>
        WorkitemInstance GetWorkitemInstance(string workitemInstanceGuid);

        /// <summary>
        /// 用途：得到流程当前用户所参与的待处理的活动实例集
        /// </summary>
        /// <param name="workflowInstanceGuid">流程实例guid</param>
        /// <returns>流程活动实例</returns>
        IEnumerable<WorkitemInstance> GetWorkitemInstances(string workflowInstanceGuid);

        /// <summary>
        /// 用途：保存流程实例的流程数据
        /// 范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动guid</param>
        /// <param name="dataentity">流程中所用到的数据内容</param>
        /// <returns></returns>
        ResultMessage SaveDataEntity(string workitemInstanceGuid, IDictionary<string, string> dataentity);

        /// <summary>
        /// 用途：为流程活动添加特殊步骤
        /// 范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workitemInstanceGuid">当前流程活动guid</param>
        /// <param name="attachmentTrainsitions">所添加的特殊步骤</param>
        /// <returns></returns>
        ResultMessage SetAttachmentTrainsitions(string workitemInstanceGuid, IDictionary<string, eTransitionType> attachmentTrainsitions);

        /// <summary>
        ///  用途：撤回流程实例
        ///  范围：大管理员|流程模型管理员
        /// </summary>
        /// <param name="workflowInstanceGuid"></param>
        /// <returns></returns>
        ResultMessage RecallWorkflowInstance(string workflowInstanceGuid);

        /// <summary>
        ///  用途：撤回流程活动
        ///  范围：大管理员|流程模型管理员|当前流程实例活动的操作者|当前流程实例活动的代理操作者
        /// </summary>
        /// <param name="workitemInstanceGuid"></param>
        /// <returns></returns>
        ResultMessage RecallWorkitemInstance(string workitemInstanceGuid);

   
    }
}
