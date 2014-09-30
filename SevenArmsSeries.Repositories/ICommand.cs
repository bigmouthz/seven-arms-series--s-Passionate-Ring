using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 命令处理
    /// </summary>
    public interface ICommand
    {
        /// <summary>
        /// 执行命令
        /// </summary>
        /// <param name="request">输入参数</param>
        /// <returns>输出参数</returns>
        CommandResponse Execute(CommandRequest request);
    }
}
