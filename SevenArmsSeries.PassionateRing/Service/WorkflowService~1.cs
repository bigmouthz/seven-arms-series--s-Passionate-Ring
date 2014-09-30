using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.PassionateRing.Common;
using SevenArmsSeries.PassionateRing.Kernel;
using SevenArmsSeries.PassionateRing.Engine;

namespace SevenArmsSeries.PassionateRing.Service
{
    /// <summary>
    /// 内部使用的方法
    /// </summary>
    public partial class WorkflowService : IWorkflowService
    {
        IUserComparer _uc = new IUserComparer();

        IUser GetUser(string userguid)
        {
            return this.Context.Store.GetUser(userguid);
        }

        /// <summary>
        /// 当前用户是否可以访问该流程实例活动
        /// </summary>
        /// <param name="wii"></param>
        /// <returns></returns>
        bool IsEffective(WorkitemInstance wii)
        {
            ///是否大管理员
            if (this.Context.CurUser.IsAdministrator())
                return true;

            ///是否流程模型管理员
            if (wii.GetWorkflowInstance().GetWorkflow().IsAdministrators(this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的操作者
            if (wii.GetWorkflowInstance().GetWorkflow().IsLegalAuthor(this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的代理操作者
            if (wii.IsProxy && _uc.Equals( wii.ProxyUser,this.Context.CurUser))
                return true;

            ///是否当前流程实例活动的潜在代理操作者
            return wii.IsEffectiveByProxyUser();
        }

        /// <summary>
        /// 工作项锁处理
        /// 对于已经加锁的超过锁定期的自动解锁，并重新上锁, 返回可处理流程权限为可控制状态
        /// 对于未加锁的直接上锁,返回可处理流程权限为可控制状态
        /// 对于已经加锁的在有效锁定期内的，返回处理流程权限为不可控制状态
        /// </summary>
        /// <param name="wii"></param>
        /// <returns>工作项只读状态</returns>
        bool EncodeLock(WorkitemInstance wii)
        {
            bool result = false;
            #region 锁定处理
            ///如果处理锁竞争状态， 则直接上锁
            if (wii.GetActivity().IsLock)
            {
                if (wii.GetWorkflowInstance().Locker == null
                    ||
                    wii.GetWorkflowInstance().Locker.IsLock == false
                    )
                {
                    wii.GetWorkflowInstance().Locker = new WorkitemLocker()
                    {
                        User = this.Context.CurUser,
                        IsLock = true,
                        LoggedTime = DateTime.Now,
                    };
                    result = this.SetWorkflowInstance(wii.GetWorkflowInstance(), eStoreType.Update);
                }
                else
                    ///超过设置时间自动解锁(默认为一小时)
                    if (wii.GetWorkflowInstance().Locker.LoggedTime.AddHours(this.Context.Config.LockMinute) >= DateTime.Now)
                    {
                        wii.GetWorkflowInstance().Locker = new WorkitemLocker()
                        {
                            User = this.Context.CurUser,
                            IsLock = true,
                            LoggedTime = DateTime.Now,
                        };
                        result = this.SetWorkflowInstance(wii.GetWorkflowInstance(), eStoreType.Update);
                    }
                    else
                    {
                        result = false;
                    }
            }
            else
            {
                result = true;
            }
            #endregion
            return result;
        }

        void AdminLock(WorkitemInstance wii)
        {
            if (wii.GetActivity().IsLock)
            {
                wii.GetWorkflowInstance().Locker = new WorkitemLocker()
                {
                    User = this.Context.CurUser,
                    IsLock = true,
                    LoggedTime = DateTime.Now,
                };
            }
        }

        /// <summary>
        /// 解锁
        /// </summary>
        /// <param name="wii"></param>
        void DecodeLock(WorkitemInstance wii)
        {
            if (wii.GetActivity().IsLock
                &&
                wii.GetWorkflowInstance().Locker.IsLock
                &&
                wii.GetWorkflowInstance().Locker.User.Guid.Equals(this.Context.CurUser.Guid))
            {
                wii.GetWorkflowInstance().Locker = new WorkitemLocker()
                {
                    IsLock = false,
                    User = this.Context.CurUser,
                    LoggedTime = DateTime.Now,
                };
            }
        }

    }
}
