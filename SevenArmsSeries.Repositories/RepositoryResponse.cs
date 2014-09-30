using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.Repositories
{
    /// <summary>
    /// 存储-返回对象
    /// </summary>
    public class RepositoryResponse
    {
        /// <summary>
        /// 执行有无成功
        /// </summary>
        public bool ResultState { get; set; }

        /// <summary>
        /// 返回执行纪录情况
        /// </summary>
        public string MessageString
        {
            get
            {
                StringBuilder sb = new StringBuilder();
                if (CreateMessage != null && CreateMessage.Count > 0)
                {
                    sb.AppendLine("Create:");
                    foreach (var m in CreateMessage)
                    {
                        sb.AppendFormat("{0},{1} ", m.Key, m.Value).AppendLine();
                    }
                }
                if (UpdateMessage != null && UpdateMessage.Count > 0)
                {
                    sb.AppendLine("Update:");
                    foreach (var m in UpdateMessage)
                    {
                        sb.AppendFormat("{0},{1} ", m.Key, m.Value).AppendLine();
                    }
                }
                if (RemoveMessage != null && RemoveMessage.Count > 0)
                {
                    sb.AppendLine("Remove:");
                    foreach (var m in RemoveMessage)
                    {
                        sb.AppendFormat("{0},{1} ", m.Key, m.Value).AppendLine();
                    }
                }
                return sb.ToString();
            }
        }

        /// <summary>
        /// 执行情况-新增
        /// </summary>
        public Dictionary<string, string> CreateMessage { get; set; }

        /// <summary>
        /// 执行情况-修改
        /// </summary>
        public Dictionary<string, string> UpdateMessage { get; set; }

        /// <summary>
        /// 执行情况-删除
        /// </summary>
        public Dictionary<string, string> RemoveMessage { get; set; }
    }
}
