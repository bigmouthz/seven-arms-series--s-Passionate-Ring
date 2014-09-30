using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 多记录查询请求对象
    /// </summary>
    public class QueryByMoreRequest : QueryBySingleRequest
    {
        /// <summary>
        /// 是否分页
        /// </summary>
        public bool IsPaging { get; set; }

        internal int _pageIndex;
        /// <summary>
        /// 分页情况下的，当前页面，下标为1起
        /// </summary>
        public virtual int PageIndex { get { return _pageIndex <= 0 ? 1 : _pageIndex; } set { _pageIndex = value; } }

        internal int _pageSize;
        /// <summary>
        /// 分页情况下的，页面尺寸，最少为1起
        /// </summary>
        public virtual int PageSize { get { return _pageSize <= 0 ? 1 : _pageSize; } set { _pageSize = value; } }

        /// <summary>
        /// 是否启用页面缓存，仅当页面缓存有效时才有用
        /// </summary>
        public bool IsCachePage { get; set; }

        /// <summary>
        /// 恒等于 启用分页下的当前页面（后台无意义，前台用于控制用）
        /// </summary>
        public int _cachePageIndex { get; set; }

        /// <summary>
        /// 缓存情况下，缓存页面数
        /// </summary>
        public int CahcePageCount { get; set; }

    }

    /// <summary>
    /// jeasyui专用扩展
    /// </summary>
    public class QieryByMoreRequestExtend : QueryByMoreRequest
    {
        /// <summary>
        /// 排序字段
        /// </summary>
        public string sort { get; set; }

        /// <summary>
        /// 排序的顺序
        /// </summary>
        public string order { get; set; }

        /// <summary>
        /// 页码数
        /// </summary>
        public int page { get; set; }

        /// <summary>
        /// 每页显示的记录数
        /// </summary>
        public int rows { get; set; }

        /// <summary>
        /// 分页情况下的，当前页面，下标为1起
        /// </summary>
        public virtual int PageIndex
        {
            get
            {
                if (page > 0) _pageIndex = page;
                return _pageIndex <= 0 ? 1 : _pageIndex;
            }
            set
            {
                page = _pageIndex = value;
            }
        }

        /// <summary>
        /// 分页情况下的，页面尺寸，最少为1起
        /// </summary>
        public virtual int PageSize
        {
            get
            {
                if (rows > 0) _pageSize = rows;

                return _pageSize <= 0 ? 1 : _pageSize;
            }
            set { rows = _pageSize = value; }
        }

        /// <summary>
        /// 排序条件 关键字:排序 对应于系统后台实现规则(asc|desc)， 转换后 用于字符串替换默认为{1}
        /// </summary>
        public virtual IList<ParamSort> ParamSort
        {
            get
            {
                if (!(string.IsNullOrWhiteSpace(sort) && string.IsNullOrWhiteSpace(order)))
                {
                    _paramSort = new List<ParamSort>() { new ParamSort() { Key = sort, Value = order }, };
                };
                return _paramSort;
            }
            set { _paramSort = value; }
        }

    }
}
