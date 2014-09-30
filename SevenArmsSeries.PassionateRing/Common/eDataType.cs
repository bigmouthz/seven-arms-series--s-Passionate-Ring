using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 数据类型
    /// </summary>
    public enum eDataType
    {
        /// <summary>
        /// 字符
        /// </summary>
        String,
        /// <summary>
        /// 数值
        /// </summary>
        Number,
        /// <summary>
        /// 时间
        /// </summary>
        Datetime,
        /// <summary>
        /// 布尔
        /// </summary>
        Boolean,
        /// <summary>
        /// json格式
        /// </summary>
        JSON,
        /// <summary>
        /// XML格式
        /// </summary>
        XML,
        /// <summary>
        /// 图形文件
        /// </summary>
        Image,
        /// <summary>
        /// 二进制文件
        /// </summary>
        BitArray
    }
}
