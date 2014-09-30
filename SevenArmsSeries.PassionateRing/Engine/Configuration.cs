using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 配置项
    /// </summary>
    public class Configuration
    {
        private int _lockminute = 30;
        /// <summary>
        /// 流程被锁定的时间
        /// </summary>
        public int LockMinute { get { return _lockminute; } set { _lockminute = value; } }

        private Right _rightbyreadonly = Right.ReadOnly;
        /// <summary>
        /// 流程可读权限
        /// </summary>
        public Right RightByReadOnly { get { return _rightbyreadonly; } set { _rightbyreadonly = value; } }

        private Right _rightbyfull = Right.Full;
        /// <summary>
        /// 流程全权限
        /// </summary>
        public Right RightByFull { get { return _rightbyfull; } set { _rightbyfull = value; } }



        private string[] _splitchar = new string[] { ";","|",};
        /// <summary>
        /// 分割字符串
        /// </summary>
        public string[] SplitChar { get { return _splitchar; } set { _splitchar = value; } }

    }
}
