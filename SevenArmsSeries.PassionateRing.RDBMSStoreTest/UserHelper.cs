using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SevenArmsSeries.Repositories;
using SRRDBMS = SevenArmsSeries.Repositories.RDBMS;
using SevenArmsSeries.Repositories.RDBMS;

namespace SevenArmsSeries.PassionateRing.RDBMSStoreTest
{

    public class UserHelper : IQueryBySingle<User>,IQueryByCount, IQueryByMore<User>
    {
        readonly  string Flag = "SevenArmsSeries.PassionateRing.RDBMSStoreTest.User";

        public UserHelper()
        {
            if (!SRRDBMS.ReposityEntityFactory.Items.ContainsKey(Flag))
            {
                SRRDBMS.ReposityEntityFactory.Items.Add(Flag,
                               new ReposityEntity()
                               {

                                   OwnerService = "PassionateRing",
                                   QuerySingleEntity = @"Select [Guid],[Code],[Name],[IsAdministrator] 
                                     From   [PassionateRing].[dbo].[User] 
                                     Where  [Guid] = @Guid",
                                   CreateEntity = @"INSERT INTO [PassionateRing].[dbo].[User]
                                    ([Guid],[Code],[Name],[IsAdministrator])
                                     VALUES
                                    (@Guid ,@Code ,@Name ,@IsAdministrator)",
                                   UpdateEntity = @"UPDATE [PassionateRing].[dbo].[User]
                                    SET [Code] = @Code
                                      ,[Name] = @Name
                                      ,[IsAdministrator] = @IsAdministrator
                                    Where [Guid] = @Guid ",
                                   RemoveEntity = @"Delete From  [PassionateRing].[dbo].[User] 
                                    Where [Guid] = @Guid ",
                                   QueryCountEntity = @"Select Count(*) CNT 
                                     From   [PassionateRing].[dbo].[User] 
                                    Where 1 = 1
                                    And  {0}",
                                   QueryMoreEntity = @"Select [Guid],[Code],[Name],[IsAdministrator] 
                                     From   [PassionateRing].[dbo].[User] 
                                    Where 1 = 1
                                    And  {0}
                                    Order By {1}",
                                   CommandEntity = @"Update [PassionateRing].[dbo].[User] 
                                   SET [IsAdministrator] = @IsAdministrator
                                    Where [Guid] = @Guid  ",                                                           
                               }
                            );

                SRRDBMS.ReposityEntityFactory.Items[Flag].Add("CreateTable",
                    @"IF NOT EXISTS  (SELECT  * FROM [PassionateRing].dbo.SysObjects WHERE ID = object_id(N'[User]') 
                    AND OBJECTPROPERTY(ID, 'IsTable') = 1) 
                        CREATE TABLE [PassionateRing].[dbo].[User](
	                        [Guid] [varchar](40) COLLATE Chinese_PRC_CI_AS NOT NULL,
	                        [Code] [varchar](100) COLLATE Chinese_PRC_CI_AS NULL,
	                        [Name] [varchar](100) COLLATE Chinese_PRC_CI_AS NULL,
	                        [IsAdministrator] [bit] NULL,
                         CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
                        (
	                        [Guid] ASC
                        )WITH (IGNORE_DUP_KEY = OFF) ON [PRIMARY]
                        ) ON [PRIMARY]
                    ");
            }
        }

        public QueryBySingleResponse<User> Get(QueryBySingleRequest request)
        {
            return new QueryBySingle<User>().Get(request, SRRDBMS.ReposityEntityFactory.Items[Flag]);
        }

        public int GetCount(QueryBySingleRequest request)
        {
            return new QueryByCount().GetCount(request, SRRDBMS.ReposityEntityFactory.Items[Flag]);
        }
        
        public QueryByMoreResponse<User> Gets(QueryByMoreRequest request)
        {
            return new QueryByMore<User>().Gets(request, SRRDBMS.ReposityEntityFactory.Items[Flag]);
        }
        
        public CommandResponse ChangeUserState(CommandRequest request)
        {
            return new Command().Execute(request, SRRDBMS.ReposityEntityFactory.Items[Flag]);
        }

        public CommandResponse CreateTable(CommandRequest request)
        {
            return new Command().Execute(request, SRRDBMS.ReposityEntityFactory.Items[Flag], "CreateTable");
        }

        public RepositoryResponse Save(RepositoryRequest<UserKey, User> request)
        {
            return new Repository<UserKey, User>().Save(request, SRRDBMS.ReposityEntityFactory.Items[Flag]);
        }
    }
}
