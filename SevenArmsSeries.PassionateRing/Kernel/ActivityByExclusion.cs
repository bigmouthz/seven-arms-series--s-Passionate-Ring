using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 竞争处理结点
    /// </summary>
    public class ActivityByExclusion:Activity
    {
        /// <summary>
        /// 活动类型:
        /// 汇聚处理        Converge,
        /// 并发处理        Concurrency,
        /// 投票处理        Vote,
        /// 竞争处理        Exclusion,
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.Exclusion; } set { ;} }
    }
}
