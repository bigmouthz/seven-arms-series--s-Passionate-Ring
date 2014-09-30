using System.Collections.Generic;
using SevenArmsSeries.Repositories.RDBMS;
using SevenArmsSeries.Repositories;

namespace Sales.Models
{
    public class Cross
    {
        public int CRowTotal { get; set; }
        public int CColTotal { get; set; }
        public IList<CrossCell> Rows { get; set; }
    }

    public class CrossCell 
    {
        public string CType { get; set; }
        public int CRow { get; set; }
        public int CCol { get; set; }
        public string CValue { get; set; }
    }

    public class CrossProject
    {
        public string ProjectGuid { get; set; }
        public string ProjectCode { get; set; }
        public string ProjectName { get; set; }
        public string ProjectByname { get; set; }
        public string ProjectType { get; set; }
        public int ProjectOrder { get; set; }
        public string KMProject { get; set; }
    }

    public class QueryByCrossGuidesCellRequest 
    {
        public int Top { get; set; }
    }

    public class QueryByCrossProjectNodeFilesRequest
    {
        public string Project { get; set; }
        public int Top { get; set; }
    }

    public class QueryByCrossProjectNodeFilesKMExtendRequest : QueryByCrossProjectNodeFilesRequest
    {
        public string UserCode { get; set; }
    }


    //public class QueryByProjectFilesRequestExtend
    //{
    //    public string UserCode { get; set; }

    //    public string ProjectGuid { get; set; }
    //}

    //public class QueryByProjectNodeFilesRequestExtend
    //{
    //    public string UserCode { get; set; }

    //    public string ProjectGuid { get; set; }

    //    public string NodeOrder { get; set; }

    //}

    #region CrossProject  得到项目列表
    public class CrossProjectHelper
    {
        readonly string Flag = "Sales.Models.CrossProject";

        public CrossProjectHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"SELECT [ProjectGuid]
      ,[ProjectCode]
      ,[ProjectName]
      ,[ProjectByname]
      ,[ProjectType]
      ,[ProjectOrder]
  FROM [KMSilverLight].dbo.[ERP_Project]
where  [ProjectGuid] in 
(
	select [ProjectGuid]
	from   [KMSilverLight].[dbo].[ERP_Project_Org] a,
		   common_Organization.dbo.view_user_org_post b
	where  a.[OrgGuid] = b.ref_org_glob_id
	and    b.ref_user_code = @usercode
)
Order by [ProjectOrder]",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [KMSilverLight].dbo.[ERP_Project]
where  [ProjectGuid] in 
(
	select [ProjectGuid]
	from   [KMSilverLight].[dbo].[ERP_Project_Org] a,
		   common_Organization.dbo.view_user_org_post b
	where  a.[OrgGuid] = b.ref_org_glob_id
	and    b.ref_user_code = @usercode
)",
                               }
                            );
            }
        }

        /// <summary>
        /// 得到项目列表
        /// </summary>
        /// <param name="usercode"></param>
        /// <returns></returns>
        public IList<CrossProject> GetRows(string usercode)
        {
            QueryByMoreRequest request = new QueryByMoreRequest() {
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter() { Name = "@usercode", Value = usercode, Type="string" },
                }
            };
            QueryByMoreResponse<CrossProject> response = new QueryByMore<CrossProject>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
    #endregion

    #region Cross 得到交叉报表的行与列结构数据集
    public class CrossHelper
    {
            readonly string Flag = "Sales.Models.Cross";

            public CrossHelper()
            {
                if (!ReposityEntityFactory.Items.ContainsKey(Flag))
                {
                    ReposityEntityFactory.Items.Add(Flag,
                                   new ReposityEntity()
                                   {
                                       OwnerService = "KMSilverLight",
                                       QuerySingleEntity = @"SELECT [CRowTotal],[CColTotal]  FROM [view_Cross_Struct]",
                                   }
                                );
                }
            }

            public Cross GetRow()
            {
                QueryBySingleRequest request = new QueryBySingleRequest() { };
                QueryBySingleResponse<Cross> response = new QueryBySingle<Cross>().Get(request, ReposityEntityFactory.Items[Flag]);
                return response.Row;
            }
    }
    #endregion

    #region CrossCell 得到交叉表的内容数据集
    public class CrossCellHelper
    {
            readonly string Flag = "Sales.Models.CrossCell";

            public CrossCellHelper()
            {
                if (!ReposityEntityFactory.Items.ContainsKey(Flag))
                {
                    ReposityEntityFactory.Items.Add(Flag,
                                   new ReposityEntity()
                                   {
                                       OwnerService = "KMSilverLight",
                                       QueryMoreEntity = @"SELECT [CType],[CRow],[CCol],[CValue]  FROM [view_Cross]",
                                       QueryCountEntity = @"SELECT Count(*) CNT  FROM [view_Cross]",
                                   }
                                );
                }
            }


            public IList<CrossCell> GetRows()
            {
                QueryByMoreRequest request = new QueryByMoreRequest() { };
                QueryByMoreResponse<CrossCell> response = new QueryByMore<CrossCell>().Gets(request, ReposityEntityFactory.Items[Flag]);
                return response.Rows;
            }
    }
    #endregion

    #region CrossGuides 得到结点指引框架结构数据集
    public class CrossGuidesHelper
    {
        readonly string Flag = "Sales.Models.CrossGuides";

        public CrossGuidesHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QuerySingleEntity = @"SELECT [CRowTotal],[CColTotal]  FROM [view_Cross_Struct_1]",
                               }
                            );
            }
        }

        public Cross GetRow()
        {
            QueryBySingleRequest request = new QueryBySingleRequest() { };
            QueryBySingleResponse<Cross> response = new QueryBySingle<Cross>().Get(request, ReposityEntityFactory.Items[Flag]);
            return response.Row;
        }
    }
    #endregion

    #region 依据NodeOrder得到 规章指南数据集
    public class NodeFile
    {
        public string FileGuid { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string FileUrl { get; set; }
    }

    public class NodeFileHelper
    {
        readonly string Flag = "Sales.Models.NodeFile";

        public NodeFileHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"select [FileGuid],  [FileName], [FileType], [FileUrl],  [UploadTime] 
from [uf_Get_view_erp_node_file](@nodeorder) x 
where {0}
Order by {1}",
                                    QueryCountEntity = @"SELECT Count(*) CNT  
FROM [uf_Get_view_erp_node_file](@nodeorder) x 
Where {0}",
                               }
                            );
            }
        }

        public QueryByMoreResponse<NodeFile> Gets(QueryByMoreRequestExtend request)
        {
            return new QueryByMore<NodeFile>().Gets(request, ReposityEntityFactory.Items[Flag]);
        }
    }
    #endregion

    #region 依据Project, NodeOrder得到 规章指南数据集
    public class ProjectNodeFile
    {
        public string PostUrl { get; set; }
        public string Title { get; set; }
    }

    public class ProjectNodeFileHelper
    {
        readonly string Flag = "Sales.Models.ProjectNodeFile";

        public ProjectNodeFileHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"select TypeName, ClickCount, PostUrl, Title, CurDate, ApprovedDate, CreatorName
                                                        from   [dbo].[UF_GetKMByProjectNode](@usercode,@projectguid,@nodeorder) z
                                                        where {0}
                                                        Order by {1}",  
                                   QueryCountEntity = @"SELECT Count(*) CNT  
                                                        FROM [dbo].[UF_GetKMByProjectNode](@usercode,@projectguid,@nodeorder) z 
                                                        Where {0}",
                               }
                            );
            }
        }

        public QueryByMoreResponse<ProjectNodeFile> Gets(QueryByMoreRequestExtend request)
        {
            return new QueryByMore<ProjectNodeFile>().Gets(request, ReposityEntityFactory.Items[Flag]);
        }
    }
    #endregion


    #region CrossGuidsCell 得到结点指引内容填充数据集
    public class CrossGuidesCellHelper
    {
        readonly string Flag = "Sales.Models.CrossGuidesCell";

        public CrossGuidesCellHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"SELECT [CType],[CRow],[CCol],[CValue]  FROM [uf_Cross_1](@top) X",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [uf_Cross_1](@top) X",
                               }
                            );
            }
        }


        public IList<CrossCell> GetRows(QueryByCrossGuidesCellRequest r)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter() { Name = "@top", Value = r.Top.ToString(), Type="int" },
                }
            };
            QueryByMoreResponse<CrossCell> response = new QueryByMore<CrossCell>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
    #endregion

    #region CrossProjectNodeFiles  得到项目结点文件 之 框架结构数据集
    public class CrossProjectNodeFilesHelper
    {
        readonly string Flag = "Sales.Models.CrossProjectNodeFiles";

        public CrossProjectNodeFilesHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QuerySingleEntity = @"SELECT [CRowTotal],[CColTotal]  FROM [view_Cross_Struct_2]",
                               }
                            );
            }
        }

        public Cross GetRow()
        {
            QueryBySingleRequest request = new QueryBySingleRequest();
            QueryBySingleResponse<Cross> response = new QueryBySingle<Cross>().Get(request, ReposityEntityFactory.Items[Flag]);
            return response.Row;
        }
    }
    #endregion

    #region CrossProjectNodeFilesCell 得到项目结点文件 之 内容填充数据集 【来源于ProjectNodeFiles,自身架构】
    public class CrossProjectNodeFilesCellHelper
    {
        readonly string Flag = "Sales.Models.CrossProjectNodeFilesCell";

        public CrossProjectNodeFilesCellHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"SELECT [CType],[CRow],[CCol],[CValue]  FROM [uf_Cross_2](@project,@top) c",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [uf_Cross_2](@project,@top) c",
                               }
                            );
            }
        }

        public IList<CrossCell> GetRows(QueryByCrossProjectNodeFilesRequest r)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter() { Name = "@project", Value = r.Project, Type="string" },
                    new RequestParameter() { Name = "@top", Value = r.Top.ToString(), Type="int" },
                }
            };
            QueryByMoreResponse<CrossCell> response = new QueryByMore<CrossCell>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
    #endregion

    #region CrossProjectNodeFilesCellKMExtend 得到OA转KM知识之 内容填充数据集 【来源于KM知识库】
    public class CrossProjectNodeFilesCellKMExtendHelper
    {
        readonly string Flag = "Sales.Models.CrossProjectNodeFilesCellKMExtend";

        public CrossProjectNodeFilesCellKMExtendHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"SELECT [CType],[CRow],[CCol],[CValue]  FROM [uf_Cross_2X](@usercode, @project,@top) c",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [uf_Cross_2X](@usercode, @project,@top) c",
                               }
                            );
            }
        }

        public IList<CrossCell> GetRows(QueryByCrossProjectNodeFilesKMExtendRequest r)
        {
            QueryByMoreRequest request = new QueryByMoreRequest()
            {
                Params = new List<RequestParameter>() 
                {
                    new RequestParameter() { Name = "@usercode", Value = r.UserCode, Type="string" },
                    new RequestParameter() { Name = "@project", Value = r.Project, Type="string" },
                    new RequestParameter() { Name = "@top", Value = r.Top.ToString(), Type="int" },
                }
            };
            QueryByMoreResponse<CrossCell> response = new QueryByMore<CrossCell>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
    #endregion

    #region CrossProjectNodeKPIs
    public class CrossProjectNodeKPIsHelper
    {
        readonly string Flag = "Sales.Models.CrossProjectNodeKPIs";

        public CrossProjectNodeKPIsHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QuerySingleEntity = @"SELECT [CRowTotal],[CColTotal]  FROM [view_Cross_Struct_3]",
                               }
                            );
            }
        }

        public Cross GetRow()
        {
            QueryBySingleRequest request = new QueryBySingleRequest() { };
            QueryBySingleResponse<Cross> response = new QueryBySingle<Cross>().Get(request, ReposityEntityFactory.Items[Flag]);
            return response.Row;
        }
    }

    public class CrossProjectNodeKPIsCellHelper
    {
        readonly string Flag = "Sales.Models.CrossProjectNodeKPIsCell";

        public CrossProjectNodeKPIsCellHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "KMSilverLight",
                                   QueryMoreEntity = @"SELECT [CType],[CRow],[CCol],[CValue]  FROM [view_Cross_3]",
                                   QueryCountEntity = @"SELECT Count(*) CNT  FROM [view_Cross_3]",
                               }
                            );
            }
        }


        public IList<CrossCell> GetRows()
        {
            QueryByMoreRequest request = new QueryByMoreRequest() { };
            QueryByMoreResponse<CrossCell> response = new QueryByMore<CrossCell>().Gets(request, ReposityEntityFactory.Items[Flag]);
            return response.Rows;
        }
    }
    #endregion
}