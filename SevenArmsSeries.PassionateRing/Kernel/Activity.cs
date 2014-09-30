using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 活动结点
    /// </summary>
    public abstract class Activity : Workitem
    {
        /// <summary>
        /// 任务集
        /// </summary>
        public IList<RuntimeTask> Tasks { get; set; }

        /// <summary>
        /// 可参与活动的人员
        /// </summary>
        public IList<RuntimeProtomer> Protomers { get; set; }

        /// <summary>
        /// 设置活动对界面业务的处理权限
        /// </summary>
        public  virtual Right UIRight { get; set; }

        /// <summary>
        /// 活动类型:
        /// </summary>
        public  virtual eActivityType ActivityType { get; set; }
        
        /// <summary>
        /// 后继流向判决
        /// </summary>
        public RuntimeJudgment Judgment { get; set; }

        /// <summary>
        /// 是否加锁
        /// 对于结束结点、只读结点、单纯的传送结点无需加锁，其它的则要加锁
        /// </summary>
       public virtual bool IsLock { get; set; }

        /// <summary>
        /// 是否必须处理审核意见
        /// </summary>
       public virtual bool IsMustAuditContent { get; set; }
        
        /// <summary>
        /// 是否必须签名
        /// </summary>
       public virtual bool IsMustSign { get; set; }

       /// <summary>
       /// 是否包含所有运行时的所有人
       /// 如包含所有人员，则在取得Protomers时，返回前台 RuntimeProtomer 计算出为 NULL, 否则返回可参与的人列表 
       /// 减少大批量用户信息的前后台传送
       /// </summary>
       public bool IsAllByRuntimeProtomers { get; set; }

        /// <summary>
        /// 得到输入转移路线
        /// </summary>
        /// <returns></returns>
        public virtual IEnumerable<Transition> GetInput()
        {
            var ts = this.GetWorkflow().Transitions.Where((t) =>
            {
                return t.RightActivity.Guid.Equals(this.Guid);
            });
            return ts;
        }

        /// <summary>
        /// 得到输出转移路线
        /// </summary>
        /// <returns></returns>
        public virtual IEnumerable<Transition> GetOutput()
        {
            var ts = this.GetWorkflow().Transitions.Where((t) =>
            {
                return t.LeftActivity.Guid.Equals(this.Guid);
            });
            return ts;
        }
    }

    public class ActivityComparer : IEqualityComparer<Activity>
    {
        public bool Equals(Activity x, Activity y)
        {
            return x.Guid.Equals(y.Guid);
        }

        public int GetHashCode(Activity obj)
        {
            return obj.GetHashCode();
        }
    }
}
