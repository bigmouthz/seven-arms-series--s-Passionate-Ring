using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 输出可约定后台执行的归约， 由IParse负责动态执行
    /// </summary>
    public class RuntimeTask : IValue
    {
        /// <summary>
        /// 进入活动时就触发，还是活动结束时触发
        /// </summary>
        public eTaskTriggerType TaskTriggerType { get; set; }

        /// <summary>
        /// 调用执行后返回结果
        /// </summary>
        public ResultMessage Result { get; set; }

        #region 实现IValue
        /// <summary>
        /// 标识
        /// </summary>
        public string Value { get; set; }
        #endregion
    }
}
