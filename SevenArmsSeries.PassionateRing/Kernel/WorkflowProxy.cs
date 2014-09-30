using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 流程委托
    /// </summary>
    public class WorkflowProxy 
    {
        public WorkflowProxy()
        {
        }

        /// <summary>
        /// 主键
        /// </summary>                                       g\
        public string Guid { get; set; }

        /// <summary>
        /// 流程
        /// </summary>
        public string WorkflowGuid { get; set; }

        // <summary>
        /// 流程委托者
        /// </summary>
        public IUser Owner { get; set; }

        /// <summary>
        /// 临时接替者
        /// </summary>
        public IUser ProxyUser { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        public bool State { get; set; }
    }
}
