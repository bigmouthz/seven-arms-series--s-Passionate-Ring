using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 任务触发类型
    /// </summary>
    public enum eTaskTriggerType
    {
        /// <summary>
        /// 不触发， 用于临时停止某项任务
        /// </summary>
        None = 0,

        /// <summary>
        /// 进入活动时就触发
        /// </summary>
        Before =1,

        /// <summary>
        /// 活动完成之后就触发
        /// </summary>
        After = 2,
    }
}
