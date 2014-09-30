using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace SevenArmsSeries.Repositories.RDBMS
{
    public interface IEntity
    {
        IKey GetKey();

        List<SqlParams> GetSQLParams();
    }
}
