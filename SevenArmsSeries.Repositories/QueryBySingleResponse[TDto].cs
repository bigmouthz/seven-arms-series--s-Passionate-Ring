using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 单记录对象返回对象
    /// </summary>
    /// <typeparam name="TDto"></typeparam>
    public class QueryBySingleResponse<TDto>
    {
        /// <summary>
        /// 返回的记录
        /// </summary>
        public TDto Row { get; set; }
    }
}
