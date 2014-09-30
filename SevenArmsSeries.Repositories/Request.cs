using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public class Request
    {
        /// <summary>
        /// 请求主体或标识约定
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 查询条件 对应于系统后台实现规则 
        /// </summary>
        public IList<RequestParameter> Params { get; set; }
    }
}
