using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 并发处理 Concurrency,
    /// 定义:
    /// 1、该结点可以由多人同时处理，即有多个结点实例存在。
    /// 2、如果后继无汇聚处理则流程存在散发状态
    /// </summary>
    public  class ActivityByConcurrency:Activity
    {
        /// <summary>
        /// 是否必须全部运行时得到的所有人都参与本结点活动， 如果该选项为真 ，则在界面上处理时不可再行选择过滤掉参与流程活动的人员
        /// </summary>
        public bool MustAllByRuntimeProtomers { get; set; }

        /// <summary>
        /// 活动类型:
        /// </summary>
        public override eActivityType ActivityType { get { return eActivityType.Concurrency; } set { ;} }
    }
}
