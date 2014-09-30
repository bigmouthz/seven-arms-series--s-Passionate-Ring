using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 提交流程工作项处理请求
    /// </summary>
    public class RequestBySubmitWorkitem
    {
        /// <summary>
        /// 活动实例标识
        /// </summary>
        public string WorkitemInstanceGuid { get; set; }

        /// <summary>
        /// 审批意见
        /// </summary>
        public string AduitContent { get; set; }

        /// <summary>
        /// 审批签名
        /// </summary>
        public string AduitSign { get; set; }

        /// <summary>
        /// 选择的投票项
        /// </summary>
        public string SelectVoteItem { get; set; }

        /// <summary>
        /// 做为投票项之其他项时所填写的内容记录
        /// </summary>
        public string OtherVoteItemContent { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        public eWorkitemState State { get; set; }

        /// <summary>
        /// 初次打开阅读的时间
        /// </summary>
        public DateTime ReadTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 当前操作用户
        /// </summary>
        public string OwnerUser { get; set; }

        /// <summary>
        /// 代理用户
        /// </summary>
        public string ProxyUser { get; set; }

        /// <summary>
        /// 是否是代理用户
        /// </summary>
        public bool IsProxyUser { get; set; }

        /// <summary>
        /// 表单提交的数据集
        /// </summary>
        public IDictionary<string, string> DataEntity { get; set; }

        /// <summary>
        /// 流转产生的下一转换活动实例标识
        /// </summary>
        public IList<SubmitWorkitemRequestNextActivity> NextActivities { get; set; }
    }


    /// <summary>
    /// 下一操作活动
    /// </summary>
    public class SubmitWorkitemRequestNextActivity
    {
        /// <summary>
        /// 活动标识
        /// </summary>
        public string Activity { get; set; }

        /// <summary>
        /// 活动名称
        /// </summary>
        public string ActivityName { get; set; }

        /// <summary>
        /// 活动操作者
        /// </summary>
        public IList<string> Operaters { get; set; }
    }
}
