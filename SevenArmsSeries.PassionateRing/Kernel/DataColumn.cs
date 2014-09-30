using System;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 业务数据字段
    /// </summary>
    public class DataColumn:Dao
    {
        /// <summary>
        /// 数据类型
        /// </summary>
       public  eDataType DataType { get; set; }

        /// <summary>
        /// 默认值
        /// </summary>
       public string DefaultValue { get; set; }
    }
}
