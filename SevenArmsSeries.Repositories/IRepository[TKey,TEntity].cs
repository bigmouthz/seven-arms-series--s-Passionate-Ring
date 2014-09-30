using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public interface IRepository<TKey,TEntity>
    {
        RepositoryResponse Save(RepositoryRequest<TKey, TEntity> request);
    }
}
