using System;
using System.Collections.Generic;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 上下文环境
    /// </summary>
    public class Context
    {
        /// <summary>
        /// 当前操作用户
        /// </summary>
        public IUser CurUser { get; set; }

        private IParse _parse;
        /// <summary>
        /// 运算解析器
        /// </summary>
        public IParse Parse
        {
            get
            {
                return _parse;
            }
            set
            {
               _parse = value ;
               _parse.SetContext(this);
            }
        }

        /// <summary>
        /// 存储工厂
        /// </summary>
        public IStore Store { get; set; }


        private Configuration _config = new Configuration() ;
        /// <summary>
        /// 配置项
        /// </summary>
        public Configuration Config { get { return _config; } set { _config = value; } }
    }
}
