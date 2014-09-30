using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories;

namespace SevenArmsSeries.PassionateRing.RDBMSStoreTest
{
    class Program
    {
        static void Main(string[] args)
        {
            TestSales();
            //TestUser();

            Console.WriteLine();
        }

        private static void TestSales()
        {
            Sales.Models.SalesHelper helper = new Sales.Models.SalesHelper();

            IList<Sales.Models.Project> projects = helper.GetProjects();
            Console.WriteLine("GetProjects :{0}", projects.Count);
            bool b; 
            b = helper.IsExistsRegister("8E80FE13-DAAC-47D1-B1E8-EA2A032C2A72", "陈彤, 陈琼", "13556111027;13802938024");
            Console.WriteLine("IsExistsRegister 1:{0}", b);
            b = helper.IsExistsRegister("010A8455-ECB0-4998-BD3F-6C484AC26DFF", "石先生", "18917012356");
            Console.WriteLine("IsExistsRegister 2:{0}", b);
            b = helper.CreateRegister("010A8455-ECB0-4998-BD3F-6C484AC26DFF","Test","TestCorp","test1guid","test1name","男","13650888157","江生","123456789","12345");
            Console.WriteLine("CreateRegister :{0}", b);
        }

        private static void TestUser()
        {
            UserHelper helper = new UserHelper();
            var r1 = helper.CreateTable(new Repositories.CommandRequest() { TrueScalar_FalseIntByResult = false });
            var r2 = helper.Save(new Repositories.RepositoryRequest<UserKey, User>()
            {
                CreateEntities = new List<User>() 
                {
                    new User(){ Guid = "1", Code="A", Name = "A", IsAdministrator=0},
                    new User(){ Guid = "2", Code="B", Name = "B", IsAdministrator=0},
                    new User(){ Guid = "3", Code="C", Name = "C", IsAdministrator=0},
                    new User(){ Guid = "4", Code="D", Name = "D", IsAdministrator=0},
                },
                UpdateEntities = new List<User>() 
                {
                    new User(){ Guid = "1", Code="A", Name = "AA", IsAdministrator=0},
                    new User(){ Guid = "4", Code="D", Name = "DD", IsAdministrator=0},
                 },
                RemoveEntities = new List<UserKey>() 
                {
                    new UserKey(){ Guid ="2" },
                    new UserKey(){ Guid ="3" },                    
                },

            });
            var r3 = helper.ChangeUserState(new Repositories.CommandRequest()
            {
                TrueScalar_FalseIntByResult = false,
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter(){ Name = "IsAdministrator", Value ="1", Type ="bit", },
                    new RequestParameter(){ Name = "Guid", Value ="1", Type ="string", }
           },
            });
            var r4 = helper.Get(new QueryBySingleRequest()
            {
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter(){ Name = "Guid", Value ="1", Type ="string", }
                },
            });
            var r5 = helper.GetCount(new QueryBySingleRequest()
            {
                ParamPlus = "1=1",
                ParamSort = new Dictionary<string, string>() 
                {
                    {"[Code]","desc"},
                    {"[Name]","desc"},
                }
            });
            var r6 = helper.Gets(new QueryByMoreRequest()
            {
                ParamPlus = "1=1",
                ParamSort = new Dictionary<string, string>() 
                {
                    {"[Code]","desc"},
                    {"[Name]","desc"},
                },
            });
        }
    }
}
