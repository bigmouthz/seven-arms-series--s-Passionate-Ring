using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace SevenArmsSeries.Repositories.RDBMS
{   
    public class Repository<TKey, TEntity> :  IRepository< TKey,TEntity> 
        where TKey :IKey
        where TEntity :IEntity
    {
        #region IRepository<TKey,TEntity> Members

        public RepositoryResponse Save(RepositoryRequest<TKey, TEntity> request)
        {
            if (string.IsNullOrWhiteSpace(request.Guid) 
                || 
                !ReposityEntityFactory.Items.ContainsKey(request.Guid)
                )
                throw new Exception("Error: requestGuid is null or is not exists! ");
            return this.Save(request, ReposityEntityFactory.Items[request.Guid]);
        }

        public RepositoryResponse Save(RepositoryRequest<TKey, TEntity> request, ReposityEntity re)
        {
            RepositoryResponse result = new RepositoryResponse();

            int cnt = 0;
            int failcnt = 0;
            foreach (var e in request.CreateEntities)
            {     
               try
                {
                    cnt += SQLHelper.ExecuteNonQuery(re.OwnerService, re.CreateEntity,e.GetSQLParams());
                }
                catch (Exception ex)
                {
                    failcnt++;
                    result.CreateMessage.Add(e.GetKey().ToString(), ex.Message);
                }
            }

            foreach (var e in request.UpdateEntities)
            {
                try
                {
                    cnt += SQLHelper.ExecuteNonQuery(re.OwnerService, re.UpdateEntity, e.GetSQLParams());
                }
                catch (Exception ex)
                {
                    failcnt++;
                    result.UpdateMessage.Add(e.GetKey().ToString(), ex.Message);
                }
            }

            foreach (var e in request.RemoveEntities)
            {
                try
                {
                    cnt += SQLHelper.ExecuteNonQuery(re.OwnerService, re.RemoveEntity, e.GetSQLParams());
                }
                catch (Exception ex)
                {
                    failcnt++;
                    result.RemoveMessage.Add(e.ToString(), ex.Message);
                }
            }

            result.ResultState = failcnt == 0;
            return result;
        }

        #endregion
    }
}
