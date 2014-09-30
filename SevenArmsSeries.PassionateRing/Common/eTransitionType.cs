using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 转换路线状态
    /// </summary>
    public enum eTransitionType
    {
         /// <summary>
        /// 一组别中必须选一个，且只能选一个(受group制约， group即LeftActivity)
        /// </summary>
        RadioType,       

        /// <summary>
        /// 必须选择 （不受group制约）
        /// </summary>
        MustType,

        /// <summary>
        /// 可选可不选（不受group制约）
        /// </summary>
        CheckType,
    }
}
