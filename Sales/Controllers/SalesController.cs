using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sales.Models;

namespace Sales.Controllers
{
    public class SalesController : ApiController
    {
        SalesHelper sh = new SalesHelper();

        /// <summary>
        /// http://localhost:2168/api/Sales/IsExistsRegister
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage IsExistsRegister(IsExistsRegisterRequest request)
        {
            return sh.IsExistsRegister(request.ProjGuid, request.CstName, request.MobileTel);
        }


        /// <summary>
        /// http://localhost:2168/api/Sales/CreateRegister
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public ResultMessage CreateRegister(CreateRegisterRequest request )
        {
            return sh.CreateRegister(request.ProjGuid, request.ProjName, request.BUGuid, request.CstName, request.Gender, request.MobileTel, request.TjrName, request.TjrMoblieTel, request.TjrCarid, request.Isyz);
        }

        /// <summary>
        /// http://localhost:2168/api/Sales/GetProjects
        /// </summary>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        public IList<Project> GetProjects() 
        {
            return sh.GetProjects();
        }
    }
}
