using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 对不修改 流程数据的活动不设置锁结点
    /// </summary>
    public  class WorkitemLocker
    {
        /// <summary>
        /// 是否锁定
        /// </summary>
        public bool IsLock { get; set; }       
        
        /// <summary>
        /// 锁的用户
        /// </summary>
        public IUser User { get; set; }

        /// <summary>
        /// 锁定｜解锁时间
        /// </summary>
        public DateTime LoggedTime { get; set; }
    }
}
