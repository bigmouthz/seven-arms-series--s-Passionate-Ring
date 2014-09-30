using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Engine;
using SevenArmsSeries.PassionateRing.Kernel;

namespace SevenArmsSeries.PassionateRing.Engine
{
    /// <summary>
    /// 运算解析器
    /// </summary>
    public interface IParse:IInstance
    {
        /// <summary>
        /// 流向判别处理
        /// </summary>
        /// <param name="wfi"></param>
        /// <param name="wii"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        IList<Transition> Judgment(WorkflowInstance wfi, WorkitemInstance wii, RuntimeJudgment value);

        /// <summary>
        /// 任务执行处理
        /// </summary>
        /// <param name="wfi"></param>
        /// <param name="wii"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        ResultMessage Task(WorkflowInstance wfi, WorkitemInstance wii, RuntimeTask value);

        /// <summary>
        /// 流程活动人员指定
        /// </summary>
        /// <param name="wfi"></param>
        /// <param name="wii"></param>
        /// <param name="value"></param>
        /// <returns></returns>
         IList<IUser> Protomer(WorkflowInstance wfi, WorkitemInstance wii, IList<RuntimeProtomer> value);   
    }
}
