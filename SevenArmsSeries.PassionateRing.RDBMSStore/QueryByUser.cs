using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS;

namespace SevenArmsSeries.PassionateRing.RDBMSStore
{
    public class QueryByUser : IQueryBySingle<User>
    {
        public QueryByUser()
        {
            if (!ReposityEntityFactory.Items.ContainsKey("User"))
            {
                ReposityEntityFactory.Items.Add("User",
                             new ReposityEntity()
                             {
                                  
                                 OwnerService = "PassionateRing",
                                 QuerySingleEntity = @"Select [Guid],[Code],[Name],[IsAdministrator] 
                                     From   [User] 
                                     Where  [Guid] = @Guid",
                             }
                          );
            }
        }

        public QueryBySingleResponse<User> Get(QueryBySingleRequest request)
        {
            return  new QueryBySingle<User>().Get(request);
        }
    }

    public class User : IUser
    {
        public bool IsAdministrator() { return true; }

        public string Guid { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }
    }
}
