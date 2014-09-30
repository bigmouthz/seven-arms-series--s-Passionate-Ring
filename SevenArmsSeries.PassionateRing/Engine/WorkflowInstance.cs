using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Engine
{
    public class WorkflowInstance : DaoInstance
    {
        #region ctor
        /// <summary>
        /// load
        /// </summary>
        public WorkflowInstance() { }

        /// <summary>
        /// create
        /// </summary>
        /// <param name="workflowguid"></param>
        /// <param name="name"></param>
        public WorkflowInstance(string workflowguid, string name = null)
        {
            this.Guid = System.Guid.NewGuid().ToString();
            this.WorkflowGuid = workflowguid;
            this.Name =  name;
        }
        #endregion
        
        #region properties

        string _name = string.Empty;
        /// <summary>
        /// 名称
        /// </summary>
        public override string Name
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_name))
                    _name = string.Format("[{0}]-{1}", DateTime.Now.ToString("yyyyMMddHHmmsss"), this.GetWorkflow().Byname);
                return _name;
            }
            set
            {
                _name = value;
            }
        }

        /// <summary>
        /// 流程模型标识 
        /// </summary>
        public string WorkflowGuid { get; set; }        

        private IUser _author;
        /// <summary>
        /// 发起人
        /// </summary>
        public IUser Author
        {
            get { return _author; }
            set
            {
                _author = value; 
            }
        }
  
        /// <summary>
        /// 记录当前流程状态
        /// </summary>
        public eWorkflowState WorkflowState { get; private set; }
        #endregion

        #region methods

        /// <summary>
        /// 得到流程数据
        /// </summary>
        /// <returns></returns>
        public IDictionary<string, string> GetDataEntity()
        {
            var dataEntity = this.GetContext().Store.GetWorkflowInstanceDataEntity(this.Guid);
            if (dataEntity == null)
            {
                dataEntity = new Dictionary<string, string>();
            }
            return dataEntity;
        }

        /// <summary>
        /// 设置流程数据
        /// </summary>
        /// <param name="dataentity"></param>
        public bool SetDataEntity(IDictionary<string, string> dataentity)
        {
            var dataEntity = GetDataEntity();
            foreach (var de in dataEntity)
            {
                if (!dataEntity.ContainsKey(de.Key))
                {
                    dataEntity.Add(de.Key, de.Value);
                }
                else
                {
                    dataEntity[de.Key] = de.Value;
                }
            }
            return this.GetContext().Store.SaveWorkflowInstanceDataEntity(this.Guid, dataEntity);
        }

        IUserComparer _uc = new IUserComparer();

        Workflow _workflow;
        /// <summary>
        /// 得到流程模型
        /// </summary>
        /// <returns></returns>
        public Workflow GetWorkflow()
        {
            if (_workflow == null)
                _workflow = this.GetContext().Store.GetWorkflow(this.WorkflowGuid);
            return _workflow;
        }

        /// <summary>
        /// 活动实例集
        /// </summary>
        /// <returns></returns>
        public IList<WorkitemInstance> GetWorkitemInstnces()
        {
            var wiis =  this.GetContext().Store.GetWorkflowInstancesWorkitemInstances(this.Guid);
            foreach (var wii in wiis)
            {
                wii.SetContext(this.GetContext());
            }
            return wiis;
        }

        /// <summary>
        /// 非正常终止流程实例
        /// </summary>
        public void Abort()
        {
            this.WorkflowState = eWorkflowState.Abort;
            this.EndTime = DateTime.Now;           
        }

        /// <summary>
        /// 正常结束流程实例
        /// </summary>
        public void Completed()
        {
            this.WorkflowState = eWorkflowState.Completed;
            this.EndTime = DateTime.Now;
        }

        /// <summary>
        /// 重启流程实例服务
        /// </summary>
        public void Restart()
        {
            this.WorkflowState = eWorkflowState.Running;
        }
        
        /// <summary>
        /// 开启流程实例服务
        /// </summary>
        public void Start()
        {
            this.WorkflowState = eWorkflowState.Running;
            this.BeginTime = DateTime.Now;
        }

        /// <summary>
        /// 得到流程锁
        /// </summary>
        /// <param name="workflowinstanceGuid"></param>
        /// <returns></returns>
        public WorkitemLocker GetWorkflowInstanceLock()
        {
            return this.GetContext().Store.GetWorkflowInstanceLock(this.Guid);
        }

        /// <summary>
        /// 保存工作流实例
        /// </summary>
        /// <returns></returns>
        public bool Save()
        {
            return this.GetContext().Store.SaveWorkflowInstance(this);
        }

        /// <summary>
        /// 保存工作流实例的锁状态
        /// </summary>
        /// <param name="workflowinstanceguid"></param>
        /// <param name="locker"></param>
        /// <returns></returns>
        public bool SaveWorkflowInstanceLock( WorkitemLocker locker)
        {
            return this.GetContext().Store.SaveWorkflowInstanceLock(this.Guid, locker);
        }
        #endregion
    }
}
