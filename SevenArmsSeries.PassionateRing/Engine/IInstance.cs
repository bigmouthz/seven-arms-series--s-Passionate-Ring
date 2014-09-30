using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 环境变量设置
    /// </summary>
    public interface IInstance
    {
        /// <summary>
        /// 获取上下文
        /// </summary>
        /// <returns></returns>
        Context GetContext();

        /// <summary>
        /// 设置上下文环境
        /// </summary>
        /// <param name="context"></param>
        void SetContext(Context context);
    }
}
