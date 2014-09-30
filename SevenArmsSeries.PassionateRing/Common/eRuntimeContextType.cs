using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    public enum eRuntimeContextType
    {
        /// <summary>
        /// 与环境无关
        /// </summary>
        Nono,
        /// <summary>
        /// 拟稿人相关
        /// </summary>
        Author,
        /// <summary>
        /// 当前用户相关
        /// </summary>
        CurUser
    }
}
