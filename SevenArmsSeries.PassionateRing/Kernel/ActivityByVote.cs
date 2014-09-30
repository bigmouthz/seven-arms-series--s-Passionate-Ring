using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 投票处理结点
    /// </summary>
    public class ActivityByVote:Activity
    {
        /// <summary>
        /// 投票预定义的选项
        /// </summary>
        public IDictionary<int, string> VoteItems { get; set; }

        /// <summary>
        /// 活动类型:
        /// 汇聚处理        Converge,
        /// 并发处理        Concurrency,
        /// 投票处理        Vote,
        /// 竞争处理        Exclusion,
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.Vote; } set { ;} }
    }
}
