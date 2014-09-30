using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public interface IQueryByCount
    {
        int GetCount(QueryBySingleRequest request);
    }
}
