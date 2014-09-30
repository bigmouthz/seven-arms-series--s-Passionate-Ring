using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sales.Models
{
    public class oAuthRequest
    {
        /// <summary>
        /// 用户登录帐号
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 登录密码，为安全客户端时需做加密处理
        /// </summary>
        public string PWD { get; set; }

        /// <summary>
        /// 约定加密方式
        /// </summary>
        public string Encrypt { get; set; }

        /// <summary>
        /// 请求附加特征码，如公共密钥等
        /// </summary>
        public string Flag { get; set; }

        /// <summary>
        /// 请求时客户端时间
        /// </summary>
        public string RequestTime { get; set; }

        /// <summary>
        /// 请求时客户端应用Url
        /// </summary>
        public string RequestUrl { get; set; }

    }

    public struct oAuthTicket
    {
        public string Ticket { get; set; }

        public static readonly oAuthTicket InvalidatedTicket = new oAuthTicket() ;
    }

    public class oAuthResponse<T>
    {
        public T ServiceT { get; set; }

        public static readonly oAuthResponse<T> InvalidatedoAuthResponse = new oAuthResponse<T>() ;
    }

    public interface ioAuthService<T> 
    {
        oAuthTicket Register(oAuthRequest request);

        oAuthResponse<T> GetDeposit(oAuthTicket ticket);

        bool UnRegister(oAuthTicket ticket);
    }

    public abstract class absoAuthService<T> : ioAuthService<T> 
    {
        private Dictionary<oAuthTicket, oAuthResponse<T>> Store = new Dictionary<oAuthTicket, oAuthResponse<T>>(); 

        public abstract bool CheckLogin(string user, string pwd, string encrypt, string requestflag );

        public abstract oAuthResponse<T> PushServiceT(string user);

        public abstract oAuthTicket CreateTicket(string user, string requesttime, string requesturl);

        public oAuthTicket Register(oAuthRequest request)
        {
            if (!CheckLogin(request.User, request.PWD, request.Encrypt, request.Flag))
                return oAuthTicket.InvalidatedTicket;

            var ticket = CreateTicket(request.User, request.RequestTime, request.RequestUrl);
             Store.Add(ticket, PushServiceT(request.User));
            return ticket;
        }

        public oAuthResponse<T> GetDeposit(oAuthTicket ticket)
        {
            if (Store.ContainsKey(ticket))
                return Store[ticket];
            else
                return oAuthResponse<T>.InvalidatedoAuthResponse;
        }

        public bool UnRegister(oAuthTicket ticket)
        {
            if (Store.ContainsKey(ticket))
                return Store.Remove(ticket);
            else
                return true;
        }
    }

    public class oAuthUser
    {
        public string UserGuid { get; set; }

        public string UserCode { get; set; }

        public string UserName { get; set; }

        public string Sex { get; set; }

        public string MobileTel { get; set; }

        public string Email { get; set; }
 
    }

    public class oAuthServiceUser : absoAuthService<oAuthUser>
    {
        public override bool CheckLogin(string user, string pwd, string encrypt, string requestflag)
        {
            throw new NotImplementedException();
        }

        public override oAuthResponse<oAuthUser> PushServiceT(string user)
        {
            throw new NotImplementedException();
        }

        public override oAuthTicket CreateTicket(string user, string requesttime, string requesturl)
        {
            throw new NotImplementedException();
        }
    }
}