using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    public class ReposityEntity
    {
        /// <summary>
        /// 服务主体标识
        /// </summary>
        public string OwnerService { get; set; }

        /// <summary>
        /// 配置项
        /// </summary>
        public IDictionary<string, string> Options { get; set; }


        public static string FalgQuerySingleEntity = "QuerySingleEntity";

        private string _QuerySingleEntity = string.Empty;
        /// <summary>
        /// 单行查询
        /// </summary>
        public string QuerySingleEntity
        {
            get { return _QuerySingleEntity; }
            set
            {
                _QuerySingleEntity = value;
                this.Add(FalgQuerySingleEntity, value);
            }
        }

        public static string FalgCreateEntity = "CreateEntity";

        private string _CreateEntity = string.Empty;
        /// <summary>
        /// 创建
        /// </summary>
        public string CreateEntity
        {
            get { return _CreateEntity; }
            set
            {
                _CreateEntity = value;
                this.Add(FalgCreateEntity, value);
            }
        }

        public static string FalgUpdateEntity = "UpdateEntity";

        private string _UpdateEntity = string.Empty;
        /// <summary>
        /// 修改
        /// </summary>
        public string UpdateEntity
        {
            get { return _UpdateEntity; }
            set
            {
                _UpdateEntity = value;
                this.Add(FalgUpdateEntity, value);
            }
        }
        public static string FalgRemoveEntity = "RemoveEntity";

        private string _RemoveEntity = string.Empty;
        /// <summary>
        /// 删除
        /// </summary>
        public string RemoveEntity
        {
            get { return _RemoveEntity; }
            set
            {
                _RemoveEntity = value;
                this.Add(FalgRemoveEntity, value);
            }
        }
        public static string FalgQueryMoreEntity = "QueryMoreEntity";

        private string _QueryMoreEntity = string.Empty;
        /// <summary>
        /// 多行查询
        /// </summary>
        public string QueryMoreEntity
        {
            get { return _QueryMoreEntity; }
            set
            {
                _QueryMoreEntity = value;
                this.Add(FalgQueryMoreEntity, value);
            }
        }
        public static string FalgQueryCountEntity = "QueryCountEntity";

        private string _QueryCountEntity = string.Empty;
        /// <summary>
        /// 行数查询
        /// </summary>
        public string QueryCountEntity
        {
            get { return _QueryCountEntity; }
            set
            {
                _QueryCountEntity = value;
                this.Add(FalgQueryCountEntity, value);
            }
        }
        public static string FalgCommandEntity = "CommandEntity";

        private string _CommandEntity = string.Empty;
        /// <summary>
        /// 命令
        /// </summary>
        public string CommandEntity
        {
            get { return _CommandEntity; }
            set
            {
                _CommandEntity = value;
                this.Add(FalgCommandEntity, value);
            }
        }

        private IDictionary<string, string> _Items = new Dictionary<string, string>();
        /// <summary>
        /// 命令主体集合
        /// </summary>
        public IDictionary<string, string> Items { get { return _Items; } private set { } }
        public void Add(string key, string value)
        {
            if (this.Items.ContainsKey(key))
            {
                this._Items[key] = value;
            }
            else
            {
                this._Items.Add(key, value);
            }
        }
    }
}
