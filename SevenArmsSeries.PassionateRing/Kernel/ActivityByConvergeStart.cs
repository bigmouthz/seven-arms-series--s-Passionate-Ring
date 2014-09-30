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
    /// 1、该结点限定仅有一个人处理，由0个结点的实例流向本结点
    /// 2、流程开始节点
    /// </summary>
    public sealed class ActivityByConvergeStart : Activity
    {

        public override bool IsLock
        {
            get
            {
                return false;
            }
            set
            {
               ;
            }
        }

        /// <summary>
        /// 活动类型:
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.ConvergeStart; } set { ;} }

    }
}
