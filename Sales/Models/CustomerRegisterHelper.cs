using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SevenArmsSeries.Repositories;
using SevenArmsSeries.Repositories.RDBMS;
using SevenArmsSeries.Repositories.RDBMS.Core;

namespace Sales.Models
{
    public class CustomerRegisterKey //: IKey
    {
        /// <summary>
        /// 内部码
        /// </summary>
        public string Guid { get; set; }

        #region IKey Members

        //public List<SqlParams> GetSQLParams()
        //{
        //    return new List<SqlParams>() 
        //    {
        //         new SqlParams(){ ColumnName = "@Guid", Value = this.Guid, ColumnType = System.Data.DbType.String },
        //    };
        //}

        #endregion
    }

    public class CustomerRegister//:IEntity
    {
        /// <summary>
        /// 内部码
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 序号
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 注册日期
        /// </summary>
        public string RegisterDate { get; set; }

        /// <summary>
        /// 客户姓名
        /// </summary>
        public string CustomerName { get; set; }

        /// <summary>
        /// 移动电话
        /// </summary>
        public string MobileTel { get; set; }

        /// <summary>
        /// 租赁用途：
        /// 写字楼【软件类｜电信服务｜电子商务｜通讯｜金融｜高新科技｜私人贸易｜医疗、医药｜法律、会计｜教育业｜顾问咨询｜中介、培训｜其它】
        /// 商  铺【餐饮｜零售｜中介｜银行｜旅行社｜娱乐休闲｜美容美发｜培训、教育｜。。。】
        /// 
        /// </summary>
        public string RentType { get; set; }

        /// <summary>
        /// 需求面积：
        /// 写字楼【90-120｜120-300｜300-600｜600-1000｜1000-1800｜...】
        /// 商  铺【150-250｜260-300｜300-500｜600-800｜。。。】
        /// </summary>
        public string DemandArea { get; set; }

        /// <summary>
        /// 客户获知途径（可多选）【短信｜户外广告｜途径｜亲友介绍｜报纸｜网络｜派单｜。。。】
        /// </summary>
        public string FindWay { get; set; }

        /// <summary>
        /// 选择项目原因(可多选)：
        /// 写字楼：[租金｜交通｜软件园区氛围｜税务优惠政策｜周边配套｜户型面积｜地理位置｜开发商品牌｜。。。]
        /// 商  铺：【租金｜交通｜软件园区氛围｜周边配套｜户型面积｜地理位置｜开发商品牌｜。。。。】
        /// </summary>
        public string RentCause { get; set; }

        /// <summary>
        /// 客户年龄段【20-30｜31-40｜41-55｜55以上】
        /// </summary>
        public string AgeGroup { get; set; }

        /// <summary>
        /// 居住区域【白云｜越秀｜荔湾|天河｜海珠｜花都｜。。。】
        /// </summary>
        public string LivingCity { get; set; }

        /// <summary>
        /// 期望租金区域{最少}
        /// </summary>
        public decimal LeftCost { get; set; }

        /// <summary>
        /// 期望租金区域（最多）
        /// </summary>
        public decimal RightCost { get; set; }

        /// <summary>
        /// 来访方式【来访｜来电】
        /// </summary>
        public string RegisterType { get; set; }

        /// <summary>
        /// 描述
        /// </summary>
        public string Describe { get; set; }

        /// <summary>
        /// 记录日期
        /// </summary>
        public string RecordTime { get; set; }

        /// <summary>
        /// 记录人
        /// </summary>
        public string Recorder { get; set; }

        /// <summary>
        /// 问题
        /// </summary>
        public string Question { get; set; }

        /// <summary>
        /// 答复
        /// </summary>
        public string Answer { get; set; }

        #region IEntity Members

        //public IKey GetKey()
        //{
        //    return (IKey)new CustomerRegisterKey() { Guid = this.Guid };
        //}

        //public List<SqlParams> GetSQLParams()
        //{
        //    return new List<SqlParams>() 
        //    {
        //         new SqlParams(){ ColumnName = "@Guid", Value = this.Guid, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@Code", Value = this.Code, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@RegisterDate", Value = this.RegisterDate, ColumnType = System.Data.DbType.DateTime },
        //         new SqlParams(){ ColumnName = "@CustomerName", Value = this.CustomerName, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@MobileTel", Value = this.MobileTel, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@RentType", Value = this.RentType, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@DemandArea", Value = this.DemandArea, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@FindWay", Value = this.FindWay, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@RentCause", Value = this.RentCause, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@AgeGroup", Value = this.AgeGroup, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@LivingCity", Value = this.LivingCity, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@LeftCost", Value = this.LeftCost, ColumnType = System.Data.DbType.Decimal },
        //         new SqlParams(){ ColumnName = "@RightCost", Value = this.RightCost, ColumnType = System.Data.DbType.Decimal },
        //         new SqlParams(){ ColumnName = "@RegisterType", Value = this.RegisterType, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@Describe", Value = this.Describe, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@RegisterType", Value = this.RegisterType, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@RecordTime", Value = this.RecordTime, ColumnType = System.Data.DbType.DateTime },
        //         new SqlParams(){ ColumnName = "@Recorder", Value = this.Recorder, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@Question", Value = this.Question, ColumnType = System.Data.DbType.String },
        //         new SqlParams(){ ColumnName = "@Answer", Value = this.Answer, ColumnType = System.Data.DbType.String },
        //    };
        //}

        #endregion
    }

    public class CustomerRegisterHelper
    {
        readonly string Flag = "Sales.Models.CustomerRegister";

        public CustomerRegisterHelper()
        {
            if (!ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {
                                   OwnerService = "Report",
                                   QuerySingleEntity = @"SELECT [Guid]
      ,[Code]
      ,Convert(varchar(10),[RegisterDate],120) [RegisterDate]
      ,[CustomerName]
      ,[MobileTel]
      ,[RentType]
      ,[DemandArea]
      ,[FindWay]
      ,[RentCause]
      ,[AgeGroup]
      ,[LivingCity]
      ,[LeftCost]
      ,[RightCost]
      ,[RegisterType]
      ,[Describe]
      ,[Question]
      ,[Answer]
      ,[Recorder]
      ,Convert(varchar(20),[RecordTime],120) [RecordTime]
  FROM [report].[dbo].[CMP_CustomerRegister]
WHERE  [Guid] = @Guid",
                                   QueryMoreEntity = @"SELECT [Guid]
      ,[Code]
      ,Convert(varchar(10),[RegisterDate],120) [RegisterDate]
      ,[CustomerName]
      ,[MobileTel]
      ,[RentType]
      ,[DemandArea]
      ,[FindWay]
      ,[RentCause]
      ,[AgeGroup]
      ,[LivingCity]
      ,[LeftCost]
      ,[RightCost]
      ,[RegisterType]
      ,[Describe]
      ,[Question]
      ,[Answer]
      ,[Recorder]
      ,Convert(varchar(20),[RecordTime],120) [RecordTime]
  FROM [report].[dbo].[CMP_CustomerRegister]
Where {0}
order by {1}",
                                   QueryCountEntity = @"SELECT Count(*) CNT  
FROM [report].[dbo].[CMP_CustomerRegister]
Where {0}",
                                   CreateEntity = @"INSERT INTO [report].[dbo].[CMP_CustomerRegister]
           ([Guid]
           ,[Code]
           ,[RegisterDate]
           ,[CustomerName]
           ,[MobileTel]
           ,[RentType]
           ,[DemandArea]
           ,[FindWay]
           ,[RentCause]
           ,[AgeGroup]
           ,[LivingCity]
           ,[LeftCost]
           ,[RightCost]
           ,[RegisterType]
           ,[Describe]
           ,[Question]
           ,[Answer]
           ,[Recorder])
     VALUES
           (@Guid
           ,@Code
           ,@RegisterDate
           ,@CustomerName
           ,@MobileTel
           ,@RentType
           ,@DemandArea
           ,@FindWay
           ,@RentCause
           ,@AgeGroup
           ,@LivingCity
           ,@LeftCost
           ,@RightCost
           ,@RegisterType
           ,@Describe
           ,@Question
           ,@Answer
           ,@Recorder)",
                                   UpdateEntity = @"UPDATE [report].[dbo].[CMP_CustomerRegister]
   SET
       [Code] = @Code 
      ,[RegisterDate] = @RegisterDate
      ,[CustomerName] = @CustomerName
      ,[MobileTel] = @MobileTel
      ,[RentType] = @RentType
      ,[DemandArea] = @DemandArea
      ,[FindWay] = @FindWay
      ,[RentCause] = @RentCause
      ,[AgeGroup] = @AgeGroup
      ,[LivingCity] = @LivingCity
      ,[LeftCost] = @LeftCost
      ,[RightCost] = @RightCost
      ,[RegisterType] = @RegisterType
      ,[Describe] = @Describe
      ,[Question] = @Question
      ,[Answer] = @Answer
      ,[Recorder] = @Recorder
 WHERE [Guid] = @Guid      ",
                                   RemoveEntity = @"DELETE FROM [report].[dbo].[CMP_CustomerRegister]
      WHERE [Guid] = @Guid ",
                               }
                            );
            }
        }

        public QueryBySingleResponse<CustomerRegister> Get(QueryBySingleRequest request)
        {
            return new QueryBySingle<CustomerRegister>().Get(request, ReposityEntityFactory.Items[Flag]);
        }

        public int GetCount(QueryBySingleRequest request)
        {
            return new QueryByCount().GetCount(request, ReposityEntityFactory.Items[Flag]);
        }

        public QueryByMoreResponse<CustomerRegister> Gets(QueryByMoreRequest request)
        {
            return new QueryByMore<CustomerRegister>().Gets(request, ReposityEntityFactory.Items[Flag]);
        }

        //public RepositoryResponse Save(RepositoryRequest<CustomerRegisterKey, CustomerRegister> request)
        //{
        //    return new Repository<CustomerRegisterKey, CustomerRegister>().Save(request, ReposityEntityFactory.Items[Flag]);
        //}

        public class SaveRequest 
        {
            public IList<CommandRequest> CreateEntities { get; set; }

            public IList<CommandRequest> UpdateEntities { get; set; }

            public IList<CommandRequest> RemoveEntities { get; set; }
        }

        public IList<CommandResponse> Save(SaveRequest request)
        {
            IList<CommandResponse> result = new List<CommandResponse>();
            if (request.CreateEntities!= null)
            foreach (var cr in request.CreateEntities)
            {
                result.Add(Create(cr));
            }

            if (request.UpdateEntities!=null)
            foreach (var cr in request.UpdateEntities)
            {
                result.Add(Update(cr));
            }

            if (request.RemoveEntities!= null)
            foreach (var cr in request.RemoveEntities)
            {
                result.Add(Remove(cr));
            }
            return result; 
        }

        public CommandResponse Create(CommandRequest request)
        {
            return new Command().Execute(request, ReposityEntityFactory.Items[Flag],  "CreateEntity");
        }

        public CommandResponse Update(CommandRequest request)
        {
            return new Command().Execute(request, ReposityEntityFactory.Items[Flag], "UpdateEntity");
        }

        public CommandResponse Remove(CommandRequest request)
        {
            return new Command().Execute(request, ReposityEntityFactory.Items[Flag], "RemoveEntity");
        }
    }
}