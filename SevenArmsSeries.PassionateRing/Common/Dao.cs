using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 唯一对象
    /// </summary>
    public  class Dao : IDao
    {
        /// <summary>
        /// 唯一键
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }


        private string _byname = string.Empty;
        /// <summary>
        /// 流程实例命名时的引用名
        /// </summary>
        public string Byname
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_byname))
                    _byname = this.Name;
                return _byname;
            }
            set { _byname = value; }
        }
    }
}
