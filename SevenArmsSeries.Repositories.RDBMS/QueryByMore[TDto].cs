using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Reflection;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace SevenArmsSeries.Repositories.RDBMS
{
    public class QueryByMore<TDto> :QueryByCount, IQueryByMore<TDto>
    {
        public QueryByMoreResponse<TDto> Gets(QueryByMoreRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Guid) 
                || 
                !ReposityEntityFactory.Items.ContainsKey(request.Guid)
                )
                throw new Exception("Error: requestGuid is null or is not exists! ");
            return this.Gets(request,  ReposityEntityFactory.Items[request.Guid]);
        }

        public QueryByMoreResponse<TDto> Gets(QueryByMoreRequest request, ReposityEntity re)
        {
            QueryByMoreResponse<TDto> result = new QueryByMoreResponse<TDto>();
            result.TotalRowCount = this.GetCount(request, re);

            string sql = Common.GetSqlPlusSort(request, re.Items[ReposityEntity.FalgQueryMoreEntity]);
            IList<SqlParams> sqlparams = Common.GetSqlParams(request);

            if (!request.IsPaging)
            {
                result.Rows = SQLHelper.Gets<TDto>(SQLHelper.ExecuteIDataReader(re.OwnerService, sql, sqlparams));
            }
            else
            {
                if (!request.IsCachePage)
                {
                    result.Rows = SQLHelper.Gets<TDto>(SQLHelper.ExecuteIDataReader(re.OwnerService, sql, sqlparams),
                                                request.PageIndex,
                                                request.PageSize);
                }
                else
                {
                    result.Rows = SQLHelper.Gets<TDto>(SQLHelper.ExecuteIDataReader(re.OwnerService, sql, sqlparams),
                                                request.PageIndex,
                                                request.PageSize,
                                                request.CahcePageCount);
                }
            }
            return result;
        }
    }
}
