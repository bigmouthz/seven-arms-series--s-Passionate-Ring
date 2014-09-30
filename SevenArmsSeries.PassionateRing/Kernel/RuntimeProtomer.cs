using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    /// 输出IList[IUser] 流程活动的对象集合，用IParse动态解析
    /// </summary>
    public class RuntimeProtomer: IValue
    {
        /// <summary>
        /// 标识值 
        /// </summary>
        public string Value { get; set; }

        /// <summary>
        /// 环境因素类型
        /// </summary>
        public eRuntimeContextType RuntimeContextType { get; set; }
    }  
}
