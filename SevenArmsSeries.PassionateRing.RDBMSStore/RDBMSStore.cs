using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Engine;
using SevenArmsSeries.Repositories;

namespace SevenArmsSeries.PassionateRing.RDBMSStore
{
    public class RDBMSStore:IStore
    {
        #region IStore Members

        public IList<Workflow> ChooseWorkflow(string bizGuid)
        {
            throw new NotImplementedException();
        }

        public Workflow GetWorkflow(string workflowGuid)
        {
            throw new NotImplementedException();
        }

        public WorkflowInstance GetWorkflowInstance(string workflowInstanceGuid)
        {
            throw new NotImplementedException();
        }

        public WorkitemInstance GetWorkitemInstance(string workitemInstanceGuid)
        {
            throw new NotImplementedException();
        }

        public IList<WorkitemInstance> GetWorkflowInstancesWorkitemInstances(string workflowInstanceGuid)
        {
            throw new NotImplementedException();
        }

        public WorkflowProxy GetProxyWorkflow(string workflowProxyGuid)
        {
            throw new NotImplementedException();
        }

        public bool SetWorkflowInstance(WorkflowInstance wfi, eStoreType storeType)
        {
            throw new NotImplementedException();
        }

        public bool SetWorkitemInstance(WorkitemInstance wii, eStoreType storeType)
        {
            throw new NotImplementedException();
        }

        public bool SetProxyWorkflow(WorkflowProxy wfp, eStoreType storeType)
        {
            throw new NotImplementedException();
        }

        public IList<WorkflowProxy> GetProxyWorkflows(string workflowGuid)
        {
            throw new NotImplementedException();
        }

        public IUser GetUser(string userGuid)
        {
            return new QueryByUser().Get(new Repositories.QueryBySingleRequest()
            {
                Guid = "User",
                Params = new List<RequestParameter>() { 
                    new RequestParameter() { Name = @"Guid", Type = "string", Value = userGuid, }
                }
            }).Row; 
        }

        #endregion
    }
}
