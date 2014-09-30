using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Reflection;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace SevenArmsSeries.Repositories.RDBMS
{
    public class QueryBySingle<TDto> :IQueryBySingle<TDto> 
    {
        public QueryBySingleResponse<TDto> Get(QueryBySingleRequest request) 
        {
            if (string.IsNullOrWhiteSpace(request.Guid)
                || 
                !ReposityEntityFactory.Items.ContainsKey(request.Guid)
                )
                throw new Exception("Error: requestGuid is null or is not exists! ");
            return this.Get(request, ReposityEntityFactory.Items[request.Guid]);
        }

        public QueryBySingleResponse<TDto> Get(QueryBySingleRequest request, ReposityEntity re)
        {
            string sql = Common.GetSqlPlusSort(request, re.Items[ReposityEntity.FalgQuerySingleEntity]);
            IList<SqlParams> sqlparams = Common.GetSqlParams(request);
            QueryBySingleResponse<TDto> result = new QueryBySingleResponse<TDto>()
            {
                Row = SQLHelper.Get<TDto>(SQLHelper.ExecuteIDataReader(re.OwnerService, sql, sqlparams))
            };
            return result;
        }
    }
}
