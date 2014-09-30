using System.Web;
using System.Web.Mvc;
using System.Web.Http.Controllers;
using System.Net;

namespace Sales
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            //filters.Add(new ValidationFilterAttribute());
        }
    }

    //public class ValidationFilterAttribute : ActionFilterAttribute
    //{
    //    public override void OnActionExecuting(HttpActionContext actionContext)
    //    {
    //        if (!actionContext.ModelState.IsValid)
    //        {
    //            actionContext.Response = actionContext.Request.CreateErrorResponse(HttpStatusCode.BadRequest, actionContext.ModelState);
    //        }
    //    }
    //}
}