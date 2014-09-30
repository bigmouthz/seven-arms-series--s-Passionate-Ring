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
    public class QueryByCount :IQueryByCount 
    {        
        public int GetCount(QueryBySingleRequest request) 
        {
            if (string.IsNullOrWhiteSpace(request.Guid)
                ||
                !ReposityEntityFactory.Items.ContainsKey(request.Guid)
                )
                throw new Exception("Error: requestGuid is null or is not exists! ");
            return this.GetCount(request, ReposityEntityFactory.Items[request.Guid]);
        }     

        public int GetCount(QueryBySingleRequest request, ReposityEntity re)
        {
            string sql = Common.GetSqlPlusSort(request, re.Items[ReposityEntity.FalgQueryCountEntity]);
            IList<SqlParams> sqlparams = Common.GetSqlParams(request);
            object obj = SQLHelper.ExecuteScalar(re.OwnerService, sql, sqlparams);
            return  int.Parse(obj.ToString());
        }
    }
}
