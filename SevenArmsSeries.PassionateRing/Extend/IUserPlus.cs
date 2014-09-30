using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Extend
{
    /// <summary>
    /// 用户扩展
    /// </summary>
    public interface IUserPlus:IUser
    {
        /// <summary>
        /// 电子邮箱
        /// </summary>
        string Email { get; set; }

        /// <summary>
        /// 移动电话
        /// </summary>
        string MobileTel { get; set; }

        /// <summary>
        /// 得到用户的所有角色
        /// </summary>
        /// <returns></returns>
        IList<IRole> GetRoles();

        /// <summary>
        /// 得到用户的所有组织架构
        /// </summary>
        /// <returns></returns>
        IList<IOrgan> GetOrgans();
    }
}
