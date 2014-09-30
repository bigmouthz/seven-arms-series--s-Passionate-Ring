using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories.RDBMS;

namespace SevenArmsSeries.PassionateRing.RDBMSStoreTest
{
    public class User:IEntity
    {
        public string Guid { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int IsAdministrator { get; set; }

        #region IEntity Members

        public IKey GetKey()
        {
            return (IKey)new UserKey() {  Guid =  this.Guid };
        }

        public List<Repositories.RDBMS.Core.SqlParams> GetSQLParams()
        {
            return new List<Repositories.RDBMS.Core.SqlParams>() 
            {
                 new Repositories.RDBMS.Core.SqlParams(){ ColumnName = "@Guid", Value = this.Guid, ColumnType = System.Data.DbType.String },
                 new Repositories.RDBMS.Core.SqlParams(){ ColumnName = "@Code", Value = this.Code, ColumnType = System.Data.DbType.String },
                 new Repositories.RDBMS.Core.SqlParams(){ ColumnName = "@Name", Value = this.Name, ColumnType = System.Data.DbType.String },
                 new Repositories.RDBMS.Core.SqlParams(){ ColumnName = "@IsAdministrator", Value = this.IsAdministrator, ColumnType = System.Data.DbType.Boolean },
            };
        }

        #endregion
    }

    public class UserKey : IKey
    {
        public string Guid { get; set; }

        #region IKey Members

        public List<Repositories.RDBMS.Core.SqlParams> GetSQLParams()
        {
            return new List<Repositories.RDBMS.Core.SqlParams>() 
            {
                 new Repositories.RDBMS.Core.SqlParams(){ ColumnName = "@Guid", Value = this.Guid, ColumnType = System.Data.DbType.String },
            };
        }

        #endregion
    }
}
