using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 临时活动实例
    /// </summary>
    public class MaybeActivity
    {
        /// <summary>
        /// 分组用标识
        /// </summary>
        public string LeftActivityName { get; set; }

        /// <summary>
        /// 可能到达的活动
        /// </summary>
        public string ActivityGuid { get; set; }

        /// <summary>
        /// 可能到达的活动别名
        /// </summary>
        public string ActivityByname { get; set; }
        
        /// <summary>
        /// 活动操作状态
        /// </summary>
        public eTransitionType ActivityState { get; set; }

        /// <summary>
        /// 得到可选的员工集合,由UI负责解析生成最终的员工列表
        /// </summary>
        public IList<IUser> RangeByUser { get; set; }

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
    }   
}
