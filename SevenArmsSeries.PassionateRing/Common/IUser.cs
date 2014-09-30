using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.Common
{
    /// <summary>
    /// 用户
    /// </summary>
    public interface IUser:IDao
    {
        /// <summary>
        /// 是否系统管理员
        /// </summary>
        bool IsAdministrator();

    }

    /// <summary>
    /// 用户比较类
    /// </summary>
    public class IUserComparer : IEqualityComparer<IUser>
    {
        public bool Equals(IUser x, IUser y)
        {
            return x.Guid.Equals(y.Guid);
        }

        public int GetHashCode(IUser obj)
        {
            return obj.GetHashCode();
        }
    }
}
