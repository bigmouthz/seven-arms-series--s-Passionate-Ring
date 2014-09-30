using SevenArmsSeries.PassionateRing.Common;
using System.Collections.Generic;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 转换线路
    /// </summary>
    public class Transition : Workitem
    {
        /// <summary>
        /// 活动
        /// </summary>
        public Activity LeftActivity { get; set; }

        /// <summary>
        /// 末端活动
        /// </summary>
        public Activity RightActivity { get; set; }

        /// <summary>
        /// 下一实例活动的可操作状态
        /// </summary>
        public eTransitionType TransitionType { get; set; }
    }

    public class TransitionComparer : IEqualityComparer<Transition>
    {

        public bool Equals(Transition x, Transition y)
        {
            return x.Guid.Equals(y.Guid);
        }

        public int GetHashCode(Transition obj)
        {
            return obj.GetHashCode();
        }
    }
}
