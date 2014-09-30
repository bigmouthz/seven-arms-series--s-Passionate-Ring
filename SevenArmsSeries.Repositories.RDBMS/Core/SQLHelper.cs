using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;

namespace SevenArmsSeries.Repositories.RDBMS.Core
{
    public sealed class SQLHelper
    {
        public static int ExecuteNonQuery(string dbname, string sql, IList<SqlParams> sqlparams)
        {
            Database db = EnterpriseLibraryContainer.Current.GetInstance<Database>(dbname);
            DbCommand cmd = db.GetSqlStringCommand(sql);
            foreach (var p in sqlparams)
            {
                if (p.ColumnName == null) break;
                db.AddInParameter(cmd, p.ColumnName, p.ColumnType, p.Value);
            }
            var result = db.ExecuteNonQuery(cmd);
            return result;
        }

        public static object ExecuteScalar(string dbname, string sql, IList<SqlParams> sqlparams)
        {
            Database db = EnterpriseLibraryContainer.Current.GetInstance<Database>(dbname);
            DbCommand cmd = db.GetSqlStringCommand(sql);
            foreach (var p in sqlparams)
            {
                if (p.ColumnName == null) break;
                db.AddInParameter(cmd, p.ColumnName, p.ColumnType, p.Value);
            }
            var result = db.ExecuteScalar(cmd);
            return result;
        }

        public static IDataReader ExecuteIDataReader(string dbname, string sql, IList<SqlParams> sqlparams)
        {
            Database db = EnterpriseLibraryContainer.Current.GetInstance<Database>(dbname);
            DbCommand cmd = db.GetSqlStringCommand(sql);
            foreach (var p in sqlparams)
            {
                if (p.ColumnName == null) break;
                db.AddInParameter(cmd, p.ColumnName, p.ColumnType, p.Value);
            }
            var result = db.ExecuteReader(cmd);
            return result;
        }

         public static T Get<T>(IDataReader dr, bool isClose = true)
         {
             return Get<T>(dr, (d) => { return IDataReaderExtend.Convert<T>(d); }, isClose);
         }

        public static T Get<T>(IDataReader dr, Func<IDataReader, T> ORM , bool isClose = true)
        {
            T t;
            dr.Read();
            t = ORM(dr);
            if (isClose) { dr.Close(); dr.Dispose(); dr = null; }
            return t;
        }

        public static List<T> Gets<T>(IDataReader dr, bool isClose = true)
        {
            return Gets<T>(dr, (d) => { return IDataReaderExtend.Convert<T>(d); }, isClose);
        }

        public static List<T> Gets<T>(IDataReader dr,Func<IDataReader,T> ORM, bool isClose = true)
        {
            //IDataReaderEntityBuilder<T> eblist = IDataReaderEntityBuilder<T>.CreateBuilder(dr);
            //eblist.Build(dr); //ORM.Adapt<IDataReader, T>(dr);
            List<T> list = new List<T>();
            while (dr.Read())
            {
                T t = ORM(dr); //ORM.Adapt<IDataReader, T>(dr);
                list.Add(t);
            }

            if (isClose) { dr.Close(); dr.Dispose(); dr = null; }
            return list;
        }

        public static List<T> Gets<T>(IDataReader dr, int pageIndex, int pageSize, bool isClose = true)
        {
            return Gets<T>(dr, pageIndex, pageSize,(d) => { return IDataReaderExtend.Convert<T>(d); }, isClose);
        }

        public static List<T> Gets<T>(IDataReader dr, int pageIndex, int pageSize, Func<IDataReader, T> ORM, bool isClose = true)
        {
            List<T> ts = new List<T>();
            long i = 0;
            long left = pageSize * (pageIndex - 1);
            if (left < 0) left = 0;

            long right = pageSize * pageIndex;
            if (right < 0) right = pageSize;

            while (dr.Read() && i < right)
            {
                if (i >= left)
                {
                    T t = ORM(dr);//ORM.Adapt<IDataReader, T>(dr);
                    ts.Add(t);
                }
                i++;
            }

            if (isClose) { dr.Close(); dr.Dispose(); dr = null; }
            return ts;
        }

        public static List<T> Gets<T>(IDataReader dr, int pageIndex, int pageSize, int cahcepagecount, bool isClose = true)
        {
            return Gets<T>(dr, pageIndex, pageSize, cahcepagecount,(d) => { return IDataReaderExtend.Convert<T>(d); }, isClose);
        }

        public static List<T> Gets<T>(IDataReader dr, int pageIndex, int pageSize, int cahcepagecount, Func<IDataReader, T> ORM, bool isClose = true)
        {
            //IDataReaderEntityBuilder<T> eblist = IDataReaderEntityBuilder<T>.CreateBuilder(dr);

            List<T> ts = new List<T>();
            long i = 0;
            long left = pageSize * (pageIndex - 1);
            if (left < 0) left = 0;

            long right = pageSize * (pageIndex + cahcepagecount - 1);
            if (right < 0) right = pageSize;

            while (dr.Read() && i < right)
            {
                if (i >= left)
                {
                    T t = ORM(dr);//ORM.Adapt<IDataReader, T>(dr);
                    ts.Add(t);
                }
                i++;
            }

            if (isClose) { dr.Close(); dr.Dispose(); dr = null; }
            return ts;
        }

        public static DbType GetDbType(string dbtype)
        {
            switch (dbtype)
            {
                case "decimal":
                    return  DbType.Decimal;
                case "int":
                    return DbType.Int32;
                case "long":
                    return DbType.Int64;
                case "bit":
                    return DbType.Boolean;
                case "datetime":
                    return DbType.DateTime;
                case "image":
                    return DbType.Binary;
                case "string":
                default:
                    return DbType.String;
            }
        }
    }
}