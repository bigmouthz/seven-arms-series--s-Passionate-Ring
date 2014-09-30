using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 流实例程状态
    /// </summary>
    public enum eWorkflowState
    {
        /// <summary>
        /// 运行中
        /// </summary>
        Running,

        /// <summary>
        /// 已经完成
        /// </summary>
        Completed,

        /// <summary>
        /// 中止流程
        /// </summary>
        Abort,
    }
}
