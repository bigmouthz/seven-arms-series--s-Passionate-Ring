using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public interface IQueryByMore<TDto> : IQueryByCount
    {
        QueryByMoreResponse<TDto> Gets(QueryByMoreRequest request);
    }
}
