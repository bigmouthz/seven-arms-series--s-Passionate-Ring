using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Extend
{
    /// <summary>
    /// 角色
    /// </summary>
    public interface IRole : IDao
    {
        /// <summary>
        /// 得到用户
        /// </summary>
        /// <returns></returns>
        IList<IUser> GetUsers();
    }

}
