using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Kernel
{
    public  interface IProtomer:IValue
    {
        eProtomerType ProtomerType  { get; set; }

        IList<IUser> GetUsers();
    }
}
