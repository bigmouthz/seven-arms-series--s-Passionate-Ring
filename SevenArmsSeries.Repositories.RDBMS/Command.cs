using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace SevenArmsSeries.Repositories.RDBMS
{
    public class Command : ICommand
    {
        public CommandResponse Execute(CommandRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Guid)
                || 
                !ReposityEntityFactory.Items.ContainsKey(request.Guid)
                )
                throw new Exception("Error: requestGuid is null or is not exists! ");
            return this.Execute(request,  ReposityEntityFactory.Items[request.Guid]);
        }

        public CommandResponse Execute(CommandRequest request, ReposityEntity re, string itemKey = null)
        {
            if (string.IsNullOrWhiteSpace(itemKey))
                itemKey = ReposityEntity.FalgCommandEntity;
            string sql = re.Items[itemKey];
            IList<SqlParams> sqlparams = Common.GetSqlParams(request);
            CommandResponse response = new CommandResponse();
            if (request.TrueScalar_FalseIntByResult)
                response.ResultValue = SQLHelper.ExecuteScalar(re.OwnerService, sql, sqlparams);
            else
                response.ResultValue = SQLHelper.ExecuteNonQuery(re.OwnerService, sql, sqlparams);
            return response;
        }
    }
}
