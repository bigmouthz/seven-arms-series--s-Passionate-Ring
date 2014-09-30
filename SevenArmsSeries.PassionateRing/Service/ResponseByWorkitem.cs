using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Engine;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 流程实例工作项返回信息
    /// </summary>
    public class ResponseByWorkitem
    {
        /// <summary>
        /// 活动实例
        /// </summary>
        public WorkitemInstance ActivityInstance { get; set; }

        /// <summary>
        /// 后继可达流程活动节点集，及人员
        /// </summary>
        public IEnumerable<MaybeActivity> NextMaybeActivities { get; set; }

        /// <summary>
        /// 活动影响界面的权限
        /// </summary>
        public Right UIRight { get;  set; }

        /// <summary>
        /// 投票预定义的选项
        /// </summary>
        public IList<VoteItem> VoteItems { get; set; }

        /// <summary>
        /// 处理后回传信息,用于前台反馈信息
        /// </summary>
        public ResultMessage CallBackMessage { get; set; } 
 
    }
}
