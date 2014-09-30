using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories.RDBMS.Core;
using System.Data;

namespace SevenArmsSeries.Repositories.RDBMS
{
    public static class Common
    {
        public static IList<SqlParams> GetSqlParams(Request request)
        {
            IList<SqlParams> sqlparams = new List<SqlParams>();
            if (request.Params!= null)
            foreach (var q in request.Params)
            {
                sqlparams.Add(new SqlParams()
                                  {
                                      ColumnName = q.Name,
                                      ColumnType = string.IsNullOrWhiteSpace(q.Type)
                                                       ? SQLHelper.GetDbType(q.Type)
                                                       : DbType.String,
                                      Value = q.Value
                                  });
            }
            return sqlparams;
        }

        public static string GetSqlPlusSort(QueryBySingleRequest request, string sql)
        {
            StringBuilder sqlsort = new StringBuilder();
            foreach (var s in request.ParamSort)
            {
                sqlsort.AppendFormat("{0} {1},", s.Key, s.Value);
            }
            if (sqlsort.Length > 0) sqlsort.Length--;
            sql = string.Format(sql, request.ParamPlus, sqlsort.ToString());
            return sql;
        }
    }
}
