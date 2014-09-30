using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 指定的下一活动
    /// </summary>
    public class NextActivity
    {
        /// <summary>
        /// 流程实例工作项
        /// </summary>
        public string WorkitemInstanceGuid { get; set; }

        /// <summary>
        /// 活动标识
        /// </summary>
        public string ActivityGuid { get; set; }

        /// <summary>
        /// 活动别名
        /// </summary>
        public string ActivityByname { get; set; }

        /// <summary>
        /// 线路Guid
        /// </summary>
        public string TransitionGuid { get; set; }

        /// <summary>
        /// 线路Code
        /// </summary>
        public string TransitionCode { get; set; }

        /// <summary>
        /// 线路Name
        /// </summary>
        public string TransitionName { get; set; }

        /// <summary>
        /// 指定的活动操作用户
        /// </summary>
        public IUser User { get; set; }
    }
}
