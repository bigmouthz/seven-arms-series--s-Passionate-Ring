using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS;

namespace SevenArmsSeries.PassionateRing.Query
{
    public class QueryByWorkflow : IQueryByMore<Workflow>, IQueryBySingle<Workflow>, IQueryByCount
    {
        public QueryByMoreResponse<Workflow> Gets(QueryByMoreRequest request)
        {
            return new QueryByMore<Workflow>().Gets(request);
        }

        public int GetCount(QueryBySingleRequest request)
        {
            return new QueryByCount().GetCount(request);
        }

        public QueryBySingleResponse<Workflow> Get(QueryBySingleRequest request)
        {
            return new QueryBySingle<Workflow>().Get(request);
        }
    }
}
