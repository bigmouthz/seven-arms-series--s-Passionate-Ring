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

    public class IsExistsRegisterRequest
    {
        public string ProjGuid { get; set; }
        public string CstName { get; set; }
        public string MobileTel { get; set; }
    }

    public class CreateRegisterRequest
    {
       public string ProjGuid { get; set; }
       public string ProjName { get; set; }
       public string BUGuid { get; set; }
       public string CstName { get; set; }
       public string Gender { get; set; }
       public string MobileTel { get; set; }
       public string TjrName { get; set; }
       public string TjrMoblieTel { get; set; }
       public string TjrCarid { get; set; }
       public int Isyz { get; set; }
    }

    public class ResultMessage
    {
        public bool State { get; set; }
        public string Message { get; set; }
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

                ReposityEntityFactory.Items[Flag].Add("CreateRegister", @"Insert into [membership].[dbo].[QMYX_Register]
                                                    ([ProjGuid],[ProjName],[BUGuid],[CstGuid],[CstName],[Gender],[MobileTel],[TjrName],[TjrMoblieTel],[TjrCarid],[Isyz])
                                                    Values
                                                    (@ProjGuid,@ProjName,@BUGuid,@CstGuid,@CstName,@Gender,@MobileTel,@TjrName,@TjrMoblieTel,@TjrCarid,@Isyz)");
                ReposityEntityFactory.Items[Flag].Add("IsExistsRegister",@"select Cnt from [membership].dbo.uf_GetRegisterCnt(@ProjGuid,@CstName,@MobileTel) x");
            }
        }

        public ResultMessage IsExistsRegister(string ProjGuid, string CstName, string MobileTel)
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
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "该客户已被推荐，不能再次推荐！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "该客户没有被推荐！" };
            }
        }

        public ResultMessage CreateRegister(string ProjGuid, string ProjName, string BUGuid, string CstName, string Gender,
            string MobileTel, string TjrName, string TjrMoblieTel, string TjrCarid, int Isyz)
        {
            var r = IsExistsRegister(ProjGuid, CstName, MobileTel);
            if (r.State)   {  return r;  }

            CommandRequest request = new CommandRequest();
            request.TrueScalar_FalseIntByResult = false;
            request.Params = new List<RequestParameter>() 
            {
                new RequestParameter(){ Name = "@ProjGuid", Value = ProjGuid },
                new RequestParameter(){ Name = "@ProjName", Value = ProjName },
                new RequestParameter(){ Name = "@BUGuid", Value = BUGuid },
                new RequestParameter(){ Name = "@CstGuid", Value = System.Guid.NewGuid().ToString() },
                new RequestParameter(){ Name = "@CstName", Value = CstName },
                new RequestParameter(){ Name = "@Gender", Value = Gender },
                new RequestParameter(){ Name = "@MobileTel", Value = MobileTel },
                new RequestParameter(){ Name = "@TjrName", Value = TjrName },
                new RequestParameter(){ Name = "@TjrMoblieTel", Value = TjrMoblieTel },
                new RequestParameter(){ Name = "@TjrCarid", Value = TjrCarid },
                new RequestParameter(){ Name = "@Isyz", Value = Isyz.ToString(), Type = "bit" },
            };
            CommandResponse response = new Command().Execute(request, ReposityEntityFactory.Items[Flag], "CreateRegister");
            if (Convert.ToInt32(response.ResultValue) > 0)
            {
                return new ResultMessage() { State = true, Message = "提交成功，请等待客户推荐审核结果！" };
            }
            else
            {
                return new ResultMessage() { State = false, Message = "对不起，客户推荐失败！" };
            }
        }

        public IList<Project> GetProjects()
        {
            QueryByMoreRequest request = new QueryByMoreRequest() { };
            QueryByMoreResponse<Project> response = new QueryByMore<Project>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
}