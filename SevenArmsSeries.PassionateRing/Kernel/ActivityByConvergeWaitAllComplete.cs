using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 汇聚处理 Converge,[Start|WaitLeftComplete|WaitConditionComplete|WaitAllComplete|CoerceComplete|End]
    /// 定义：
    /// 1、该结点限定仅有一个人处理，由多个或者一个结点的若干个实例流向本结点，
    /// 因此本结点的下一步流向判别必须综合考虑所有流入结点实例的运行状态情况。
    /// 2、本结点因为有多个流入，则会产生多个结点实例，因此必须使用竞争同步策略来处理。
    /// 在满足所有流入结点实例为处理完成的状态下，本结点的实例间是存在排它性的。
    /// 3、该结点的所有导入活动必须全部完成才允许执行激活本结点
    /// </summary>
    public sealed class ActivityByConvergeWaitAllComplete : Activity
    {
        /// <summary>
        /// 活动类型:
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.ConvergeWaitAllComplete; } set { ;} }

    }
}
