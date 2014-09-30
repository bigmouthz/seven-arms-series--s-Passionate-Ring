//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Text.RegularExpressions;

//namespace SevenArmsSeries.PassionateRing.Common
//{

//    /// <summary>
//    /// 抽象，验证表达式
//    /// </summary>
//    public abstract class AbsValidExpression : IValidExpression
//    {
//        /// <summary>
//        /// 唯一键
//        /// </summary>
//        public string Guid { get; set; }

//        /// <summary>
//        /// 名称
//        /// </summary>
//        public string Name { get; set; }

//        /// <summary>
//        /// 编码
//        /// </summary>
//        public string Type { get; set; }

//        public abstract bool IsValid(string testObject);
//    }

//    /// <summary>
//    /// 不验证： 验证表达式
//    /// </summary>
//    public class NothingValidExpression : AbsValidExpression
//    {

//        public override bool IsValid(string testObject)
//        {
//            return true;
//        }
//    }

//    /// <summary>
//    /// 正则表达式验证
//    /// </summary>
//    public class RegexValidExpression : AbsValidExpression
//    {
//        string _regexExpression = "";

//        public RegexValidExpression(string regexExpression)
//        {
//            _regexExpression = regexExpression;
//        }

//        public override bool IsValid(string testObject)
//        {
//            Regex r = new Regex(_regexExpression);
//            r.IsMatch(testObject);
//            return true;
//        }
//    }

//    /// <summary>
//    /// 范围验证
//    /// </summary>
//    public class RangeValidExpression : AbsValidExpression
//    {
//        dynamic _left;
//        dynamic _right;
//        Func<string, dynamic> _convert;

//        public RangeValidExpression(dynamic left, dynamic right, Func<string, dynamic> convert)
//        {
//            _left = left;
//            _right = right;
//            _convert = convert;
//        }

//        public override bool IsValid(string testObject)
//        {
//            dynamic tmp = _convert(testObject);
//            return tmp >= _left && tmp < _right;
//        }
//    }

//    /// <summary>
//    /// 包含验证
//    /// </summary>
//    public class ContainValidExpression : AbsValidExpression
//    {
//        ICollection<dynamic> _coll;
//        Func<dynamic, dynamic, bool> _equal;
//        Func<string, dynamic> _convert;

//        public ContainValidExpression(ICollection<dynamic> coll, Func<dynamic, dynamic, bool> equal, Func<string, dynamic> convert)
//        {
//            _coll = coll;
//            _equal = equal;
//            _convert = convert;
//        }

//        public override bool IsValid(string testObject)
//        {
//            dynamic tmp = _convert(testObject);
//            foreach (var c in _coll)
//            {
//                if (_equal(c, tmp))
//                    return true;
//            }
//            return false;
//        }
//    }
//}
