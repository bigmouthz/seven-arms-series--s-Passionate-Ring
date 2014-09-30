using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories;

namespace SevenArmsSeries.PassionateRing.RDBMSStore
{
    class Program
    {
        static void Main(string[] args)
        {

            QueryByUser qu = new QueryByUser();

            var users = qu.Get(new Repositories.QueryBySingleRequest()
            {
                Guid = "User",
                Params = new List<RequestParameter>() { 
                     new RequestParameter(){ Name ="@Guid", Value = "123"}
                }
            }).Row;
            Console.WriteLine(users.Name);
            Console.ReadLine();
        }
    }
}
