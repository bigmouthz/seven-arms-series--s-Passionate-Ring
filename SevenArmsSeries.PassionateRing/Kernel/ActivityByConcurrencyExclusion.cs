using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 竞争处理
    /// 定义：
    /// 1、竞争结点是更为特殊的并发结点，结点有多个实例，但是实例必须只有一可以处理，其它的实例就为排斥关闭状态
    /// 2、多个人让最先见到的人处理
    /// </summary>
    public sealed class ActivityByConcurrencyExclusion:ActivityByConcurrency
    {
        /// <summary>
        /// 活动类型:
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.ConcurrencyExclusion; } set { ;} }
    }
}
