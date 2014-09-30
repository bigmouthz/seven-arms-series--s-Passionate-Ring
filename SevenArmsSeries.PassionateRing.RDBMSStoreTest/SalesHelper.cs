using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS;

namespace Sales.Models
{
    public class Project
    {
        public string ProjGuid { get; set; }

        public string ProjName { get; set; }

        public string BUGuid { get; set; }
    }

    public class SalesHelper 
    {
        readonly  string Flag = "Sales.Models.Register";

        public SalesHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {

                                   OwnerService = "Sales",
                                   QueryMoreEntity = @"SELECT [ProjGuid],[ProjName],[BUGuid]  FROM [membership].[dbo].[view_project]",
                                   QueryCountEntity = @"select Count(*) Cnt from [membership].dbo.[view_project]",
                               }
                            );

                ReposityEntityFactory.Items[Flag].Add("CreateRegister",@"Insert into [membership].[dbo].[QMYX_Register]
                                                    ([ProjGuid],[ProjName],[BUGuid],[CstGuid],[CstName],[Gender],[MobileTel],[TjrName],[TjrMoblieTel],[TjrCarid])
                                                    Values
                                                    (@ProjGuid,@ProjName,@BUGuid,@CstGuid,@CstName,@Gender,@MobileTel,@TjrName,@TjrMoblieTel,@TjrCarid)");
                ReposityEntityFactory.Items[Flag].Add("IsExistsRegister",@"select Cnt from [membership].dbo.uf_GetRegisterCnt(@ProjGuid,@CstName,@MobileTel) x");
            }
        }

        public bool IsExistsRegister(string ProjGuid, string CstName, string MobileTel)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = true;
            request.Params = new List<RequestParameter>() 
            {
                new RequestParameter(){ Name = "@ProjGuid", Value = ProjGuid },
                new RequestParameter(){ Name = "@CstName", Value = CstName },
                new RequestParameter(){ Name = "@MobileTel", Value = MobileTel },
            };

            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "IsExistsRegister");
            return Convert.ToInt32(response.ResultValue) > 0;
        }

        public bool CreateRegister(string ProjGuid, string ProjName, string BUGuid, string CstGuid, string CstName, string Gender,
            string MobileTel, string TjrName, string TjrMoblieTel, string TjrCarid)
        {
            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                new RequestParameter(){ Name = "@ProjGuid", Value = ProjGuid },
                new RequestParameter(){ Name = "@ProjName", Value = ProjName },
                new RequestParameter(){ Name = "@BUGuid", Value = BUGuid },
                new RequestParameter(){ Name = "@CstGuid", Value = CstGuid },
                new RequestParameter(){ Name = "@CstName", Value = CstName },
                new RequestParameter(){ Name = "@Gender", Value = Gender },
                new RequestParameter(){ Name = "@MobileTel", Value = MobileTel },
                new RequestParameter(){ Name = "@TjrName", Value = TjrName },
                new RequestParameter(){ Name = "@TjrMoblieTel", Value = TjrMoblieTel },
                new RequestParameter(){ Name = "@TjrCarid", Value = TjrCarid },
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "CreateRegister");
            return Convert.ToInt32(response.ResultValue) > 0;
        }

        public IList<Project> GetProjects()
        {
            QueryByMoreRequest request = new QueryByMoreRequest() { };
            QueryByMoreResponse<Project> response = new QueryByMore<Project>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
}