using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;

namespace SevenArmsSeries.PassionateRing.Extend
{
    /// <summary>
    /// 组织架构
    /// </summary>
    public interface IOrgan : IRole
    {
        /// <summary>
        /// 上一级组织架构标识
        /// </summary>
        string ParentGuidID { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        eOrganType OrganType { get; set; }

        /// <summary>
        /// 得到所有子孙用户
        /// </summary>
        /// <returns></returns>
        IList<IUser> GetUsersByOffspring();

        /// <summary>
        /// 得到当前组织架构的负责人
        /// </summary>
        /// <returns></returns>
        IUser GetManager();

    }
}
