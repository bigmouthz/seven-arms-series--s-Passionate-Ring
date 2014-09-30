using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 命令执行请求
    /// </summary>
    public class CommandRequest : Request
    {
        /// <summary>
        /// 返回值类型：true:返回任意类型，false:Int类型
        /// </summary>
        public bool TrueScalar_FalseIntByResult { get; set; }

    }
}
