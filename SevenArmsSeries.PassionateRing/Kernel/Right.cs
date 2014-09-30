using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 权限对象
    /// </summary>
    public class Right
    {
        /// <summary>
        /// 编码
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        public static readonly Right ReadOnly = new Right() 
        { Guid = "00000000-0000-0000-0000-000000000000", Name = "ReadOnly" };

        public static readonly Right Full = new Right() 
        { Guid = "11111111-1111-1111-1111-111111111111", Name = "Full" };
    }
}
