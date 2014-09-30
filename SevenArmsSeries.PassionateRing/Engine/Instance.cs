using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 环境变量设置类
    /// </summary>
    public class Instance:IInstance
    {
        Context _context;
        /// <summary>
        /// 获取上下文
        /// </summary>
        public Context GetContext()
        {
            return this._context;
        }

        /// <summary>
        /// 设置上下文环境
        /// </summary>
        /// <param name="context"></param>
        public void SetContext(Context context)
        {
            this._context = context;
        }
    }
}
