using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sales.Models;
using SevenArmsSeries.Repositories;

namespace Sales.Controllers
{
    public class CrossController : ApiController
    {
        /// <summary>
        /// http://localhost:2168/api/Cross/GetCross
        /// 得到默认交叉报表数据集
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public Cross GetCross()
        {
            CrossHelper ch = new CrossHelper();
            Cross result = ch.GetRow();
            CrossCellHelper cch = new CrossCellHelper();
            result.Rows = cch.GetRows();
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Cross/GetCrossProject
        /// 得到用户可以访问的项目的列表
        /// </summary>
        /// <param name="usercode"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public IList<CrossProject> GetCrossProject(string usercode)
        {
            CrossProjectHelper ch = new CrossProjectHelper();
            var result = ch.GetRows(usercode);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Cross/GetCrossGuides
        /// 得到项目规章指引之数据集  参数{Top}
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public Cross GetCrossGuides( QueryByCrossGuidesCellRequest request)
        {
            CrossGuidesHelper ch = new CrossGuidesHelper();
            Cross result = ch.GetRow();
            CrossGuidesCellHelper cch = new CrossGuidesCellHelper();
            result.Rows = cch.GetRows(request);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Cross/GetCrossProjectNodeFiles
        /// 得到项目结点文件之数据集 参数{Project,Top} 【来源于ProjectNodeFiles,自身架构】
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public Cross GetCrossProjectNodeFiles(QueryByCrossProjectNodeFilesRequest request)
        {
            CrossProjectNodeFilesHelper ch = new CrossProjectNodeFilesHelper();
            Cross result = ch.GetRow();
            CrossProjectNodeFilesCellHelper cch = new CrossProjectNodeFilesCellHelper();
            result.Rows = cch.GetRows(request);
            return result;
        }
        
        /// <summary>
        /// http://localhost:2168/api/Cross/GetCrossProjectNodeFilesKMExtend
        /// 得到得到OA转KM知识之之数据集 参数{Project,Top,UserCode}  【来源于KM知识库】
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public Cross GetCrossProjectNodeFilesKMExtend(QueryByCrossProjectNodeFilesKMExtendRequest request)
        {
            CrossProjectNodeFilesHelper ch = new CrossProjectNodeFilesHelper();
            Cross result = ch.GetRow();
            CrossProjectNodeFilesCellKMExtendHelper cch = new CrossProjectNodeFilesCellKMExtendHelper();
            result.Rows = cch.GetRows(request);
            return result;
        }


        /// <summary>
        /// http://localhost:2168/api/Cross/GetNodeFiles
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public QueryByMoreResponse<NodeFile> GetNodeFiles(QueryByMoreRequestExtend request)
        {
            NodeFileHelper nfh = new NodeFileHelper();
            var result = nfh.Gets(request);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Cross/GetProjectNodeFiles
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public QueryByMoreResponse<ProjectNodeFile> GetProjectNodeFiles(QueryByMoreRequestExtend request)
        {
            ProjectNodeFileHelper pnfh = new ProjectNodeFileHelper();
            var result = pnfh.Gets(request);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/Cross/GetCrossProjectNodeKPIs
        /// 得到项目相关的KPI信息数据集
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public Cross GetCrossProjectNodeKPIs()
        {
            CrossProjectNodeKPIsHelper ch = new CrossProjectNodeKPIsHelper();
            Cross result = ch.GetRow();
            CrossProjectNodeKPIsCellHelper cch = new CrossProjectNodeKPIsCellHelper();
            result.Rows = cch.GetRows();
            return result;
        }

    }
}
