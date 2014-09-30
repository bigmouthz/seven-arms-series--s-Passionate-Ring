using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.CSharp;
using IronJS;
namespace SevenArmsSeries.PassionateRing.IronJSParse
{
    class XXX
    {
        static void XMain(string[] args)
        {
            var ctx = new IronJS.Hosting.CSharp.Context();
            dynamic hello = ctx.Execute("(function (){ return {msg:'你好，IronJS'};})();");
            string ss = hello.msg;
            Console.Out.WriteLine(hello.msg);
            //Console.Out.WriteLine(hello.noexist);
            Console.ReadKey(true);
        }
    }
}
