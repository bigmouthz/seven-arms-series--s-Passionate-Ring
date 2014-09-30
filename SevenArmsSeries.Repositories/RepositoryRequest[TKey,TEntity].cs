using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 存储-请求对象
    /// </summary>
    /// <typeparam name="TKey"></typeparam>
    /// <typeparam name="TEntity"></typeparam>
    public class RepositoryRequest<TKey, TEntity>:Request
    {
        /// <summary>
        /// 新增实体集
        /// </summary>
        public List<TEntity> CreateEntities { get; set; }

        /// <summary>
        /// 修改实体集
        /// </summary>
        public List<TEntity> UpdateEntities { get; set; }

        /// <summary>
        /// 删除实体集
        /// </summary>
        public List<TKey> RemoveEntities { get; set; }
    }
}
