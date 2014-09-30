//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace xstep.Workflow
//{
//    /// <summary>
//    /// 递归
//    /// </summary>
//    public class Recursion:Dao,IDao
//    {
//        /// <summary>
//        /// 主
//        /// </summary>
//        public string Owner { get; set; }

//        /// <summary>
//        /// 子孙
//        /// </summary>
//        public string OwnerOffspring { get; set; }

//        /// <summary>
//        /// 层次 0:为自己， 1：直系子女， 2：直系子女的直系子女， 依次类推
//        /// </summary>
//        public int Depth { get; set; }

//        /// <summary>
//        /// 直系子女个数
//        /// </summary>
//        public int ChildrenCount { get; set; }

//        /// <summary>
//        /// 所有子孙个数
//        /// </summary>
//        public int OffspringCount { get; set; }

//    }
//}
