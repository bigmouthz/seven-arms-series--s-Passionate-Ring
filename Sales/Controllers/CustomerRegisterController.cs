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
    public class CustomerRegisterController : ApiController
    {
        CustomerRegisterHelper crh = new CustomerRegisterHelper();
        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/Get
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AcceptVerbsAttribute("GET", "POST")]
        public QueryBySingleResponse<CustomerRegister> Get(QueryBySingleRequest request)
        {
            return crh.Get(request);
         }

        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/Gets
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
        public QueryByMoreResponse<CustomerRegister> Gets(QueryByMoreRequestExtend request)
        {
            var result =  crh.Gets(request);
            return result;
        }

        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/GetCount
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
       public int GetCount(QueryBySingleRequest request)
        {
            return crh.GetCount(request);
        }

        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/Create
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
       public CommandResponse Create(CommandRequest request) 
        {
            return crh.Create(request);
        }

        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/Update
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
       public CommandResponse Update(CommandRequest request)
        {
            return crh.Update(request);
        }

        /// <summary>
        /// http://localhost:2168/api/CustomerRegister/Remove
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
       public CommandResponse Remove(CommandRequest request)
        {
            return crh.Remove(request);
        }

       /// <summary>
       /// http://localhost:2168/api/CustomerRegister/Save
       /// </summary>
       /// <param name="request"></param>
       /// <returns></returns>
       [AcceptVerbsAttribute("GET", "POST")]
       public IList<CommandResponse> Save(Sales.Models.CustomerRegisterHelper.SaveRequest request)
       {
           return crh.Save(request);
       }
  
    }

    public class RepositoryRequest
    {
        public string RepositoryType { get; set; }

        public CommandRequest request { get; set; }
    }
}
