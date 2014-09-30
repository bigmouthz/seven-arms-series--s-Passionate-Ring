using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Extend
{
    /// <summary>
    /// 邮件处理
    /// </summary>
    public interface IEmail
    {        
        /// <summary>
        /// 由该地址发送
        /// </summary>
        string FromEmail { get; set; }

        /// <summary>
        /// 产生本邮件的时间
        /// </summary>
        DateTime Createtime { get; set; }
        
        /// <summary>
        /// 延迟发送
        /// </summary>
        TimeSpan DelayTime { get; set; }

        /// <summary>
        /// 发送邮件
        /// </summary>
        /// <param name="toEmails">邮箱地址</param>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="attachments">附件</param>
        /// <param name="BCCEmails">密送</param>
        /// <returns>是否成功</returns>
        bool Send(List<string> toEmails, string title, string content, IList<byte[]> attachments, List<string> BCCEmails = null);
    }
}
