using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 流程委托代理
    /// </summary>
    public class RequestByProxyWorkflow
    {  
        /// <summary>
        /// 流程模型标识
        /// </summary>
        public string WorkflowGuid { get; set; }

        /// <summary>
        /// 流程所有者
        /// </summary>
        public string OwnerUserGuid { get; set; }

        /// <summary>
        /// 受委托处理流程的人
        /// </summary>
        public string ProxyUserGuid { get; set; }

        /// <summary>
        /// 开始委托的时间
        /// </summary>
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 结束委托的时间
        /// </summary>
        public DateTime EndTime { get; set; }
    }
}
