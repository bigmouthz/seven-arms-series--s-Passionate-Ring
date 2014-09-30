using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 所有元素的根
    /// </summary>
    public interface IDao
    {
        /// <summary>
        /// 唯一值
        /// </summary>
        string Guid { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        string Name { get; set; }

    }
}
