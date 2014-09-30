using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Extend
{
    /// <summary>
    /// 短信处理
    /// </summary>
    public interface ISMS
    {
        /// <summary>
        /// 产生本邮件的时间
        /// </summary>
        DateTime Createtime { get; set; }

        /// <summary>
        /// 延迟发送
        /// </summary>
        TimeSpan DelayTime { get; set; }

        bool Send(List<string> MobileTels, string Content, List<string> BCCMobileTels = null);
    }
}
