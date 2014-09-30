using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 流程工作项状态
    /// </summary>
    public enum eWorkitemState
    {
        /// <summary>
        /// 准备处理
        /// </summary>
        Ready,

        /// <summary>
        /// 处理中
        /// </summary>
        Running,

        /// <summary>
        /// 互斥性关闭（当同一活动节点由多人处理时，仅第一个先看到的处理，其它的被忽略掉]）
        /// </summary>
        ExclusionCompleted,

        /// <summary>
        /// 聚合结点关闭
        /// </summary>
        ConvergeComplete,

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
