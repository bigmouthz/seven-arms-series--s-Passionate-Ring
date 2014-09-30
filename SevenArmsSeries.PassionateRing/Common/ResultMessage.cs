using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 运行中的信息载体
    /// </summary>
    public class ResultMessage
    {
        /// <summary>
        /// 成功｜失败
        /// </summary>
        public bool State { get; set; }

        /// <summary>
        /// 返回信息
        /// </summary>
        public string Message { get; set; }
    }
}
