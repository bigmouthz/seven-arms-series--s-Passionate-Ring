using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    /// <summary>
    ///流向判决
    ///输出Ilist[ITransition]  转换路线集， 用IParse动态解析
    /// </summary>
    public class RuntimeJudgment:IValue
    {
        #region 实现IValue
        /// <summary>
        /// 标识
        /// </summary>
        public string Value { get; set; }
        #endregion
    }
}
