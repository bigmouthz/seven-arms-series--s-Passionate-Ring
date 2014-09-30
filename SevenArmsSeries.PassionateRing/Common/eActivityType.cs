using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 活动类型
    /// </summary>
    public enum eActivityType
    {
        /// <summary>
        /// 汇聚处理 Converge,[Start|WaitLeftComplete|WaitConditionComplete|WaitAllComplete|CoerceComplete|End]
        /// 定义：
        /// 1、该结点限定仅有一个人处理，由多个或者一个结点的若干个实例流向本结点，
        /// 因此本结点的下一步流向判别必须综合考虑所有流入结点实例的运行状态情况。
        /// 2、本结点因为有多个流入，则会产生多个结点实例，因此必须使用竞争同步策略来处理。
        /// 在满足所有流入结点实例为处理完成的状态下，本结点的实例间是存在排它性的。
        /// </summary>
        ////Converge,

        /// <summary>
        /// 流程开始节点
        /// </summary>
        ConvergeStart,

        /// <summary>
        /// 该结点的最近导入活动必须全部完成才允许执行激活本结点
        /// </summary>
        ConvergeWaitLeftComplete,
        
        /// <summary>
        /// 该结点的所有导入活动进行条件判断，只有满足条件的才允许激活本结点
        /// </summary>
        ConvergeWaitConditionComplete,
        
        /// <summary>
        /// 该结点的所有导入活动必须全部完成才允许执行激活本结点
        /// </summary>
        ConvergeWaitAllComplete,
        
        /// <summary>
        /// 无论该结点的所有导入活动完成与否直接激活本结点，关闭直接导入活动结点
        /// </summary>
        ConvergeCoerceComplete,

        /// <summary>
        /// 无论该结点的前的所有活动完成与否直接激活本结点，关闭流程运行
        /// </summary>
        ConvergeEnd,

        /// <summary>
        /// 并发处理 Concurrency,
        /// 定义:
        /// 1、该结点可以由多人同时处理，即有多个结点实例存在。
        /// 2、如果后继无汇聚处理则流程存在散发状态
        /// </summary>
        Concurrency,

        /// <summary>
        /// 投票处理
        /// 定义：
        /// 1、投票结点是特殊的并发结点
        /// 2、投标结点有相应的扩展字段来实现对投票的显示统计处理
        /// </summary>
        ConcurrencyVote,

        /// <summary>
        /// 竞争处理
        /// 定义：
        /// 1、竞争结点是更为特殊的并发结点，结点有多个实例，但是实例必须只有一可以处理，其它的实例就为排斥关闭状态
        /// 2、多个人让最先见到的人处理
        /// </summary>
        ConcurrencyExclusion,
    }
}
