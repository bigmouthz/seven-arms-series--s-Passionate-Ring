using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 多记录查询返回对象
    /// </summary>
    /// <typeparam name="TDto"></typeparam>
    public class QueryByMoreResponse<TDto>
    {
        /// <summary>
        /// 返回总记录数
        /// </summary>
        public int TotalRowCount { get; set; }

        /// <summary>
        /// 返回的记录集
        /// </summary>
        public List<TDto> Rows { get; set; }
    }
}
