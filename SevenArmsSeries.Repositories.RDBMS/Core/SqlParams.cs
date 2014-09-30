using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories.RDBMS.Core
{
    public class SqlParams
    {
        public string ColumnName { get; set; }

        private System.Data.DbType _columnType = System.Data.DbType.String;
        public System.Data.DbType ColumnType { get { return _columnType; } set { _columnType = value; } }

        public object Value { get; set; }
    }
}
