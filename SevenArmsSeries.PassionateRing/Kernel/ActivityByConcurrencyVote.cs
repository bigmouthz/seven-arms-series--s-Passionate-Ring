using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 投票处理
    /// 定义：
    /// 1、投票结点是特殊的并发结点
    /// 2、投标结点有相应的扩展字段来实现对投票的显示统计处理
    /// </summary>
    public sealed class ActivityByConcurrencyVote : ActivityByConcurrency
    {
        /// <summary>
        /// 投票预定义的选项
        /// </summary>
        public IList<VoteItem> VoteItems { get; set; }

        /// <summary>
        /// 活动类型:
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.ConcurrencyVote; } set { ;} }
    }

    /// <summary>
    /// 投票项
    /// </summary>
    public class VoteItem
    {
        /// <summary>
        /// 投票序号
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 描述
        /// </summary>
        public string Describe { get; set; }
    }
}
