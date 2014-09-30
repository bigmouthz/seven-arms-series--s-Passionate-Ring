using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public interface IQueryBySingle<TDto>
    {
        QueryBySingleResponse<TDto> Get(QueryBySingleRequest request);
    }
}
