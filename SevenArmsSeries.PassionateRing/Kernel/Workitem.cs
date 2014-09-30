using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 工作项
    /// </summary>
    public class Workitem :Dao
    {
        Workflow _workflow;
        /// <summary>
        /// 得到工作流模型
        /// </summary>
        /// <returns></returns>
        public Workflow GetWorkflow()
        {
            return _workflow;
        }

        /// <summary>
        /// 设置工作流模型
        /// </summary>
        /// <param name="workflow"></param>
        public void SetWorkflow(Workflow workflow)
        {
            this._workflow = workflow;
        }
    }
}
