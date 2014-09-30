using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 值，用IParse来动态解析
    /// </summary>
    public interface IValue
    {
        /// <summary>
        /// 标识
        /// </summary>
        string Value { get; set; }
    }
}
