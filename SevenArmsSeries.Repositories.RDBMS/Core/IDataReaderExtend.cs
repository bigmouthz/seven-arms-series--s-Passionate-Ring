using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Reflection;
using System.Reflection.Emit;

namespace SevenArmsSeries.Repositories.RDBMS.Core
{
    internal class IDataReaderEntityBuilder<Entity>
    {
        private static readonly MethodInfo getValueMethod =
            typeof (IDataRecord).GetMethod("get_Item", new Type[] {typeof (int)});

        private static readonly MethodInfo isDBNullMethod =
            typeof (IDataRecord).GetMethod("IsDBNull", new Type[] {typeof (int)});

        private delegate Entity Load(IDataRecord dataRecord);

        private Load handler;

        private IDataReaderEntityBuilder()
        {
        }

        public Entity Build(IDataRecord dataRecord)
        {
            return handler(dataRecord);
        }

        private static Dictionary<int, object> CacheDREB = new Dictionary<int, object>();

        public static IDataReaderEntityBuilder<Entity> CreateBuilder(IDataRecord dataRecord)
        {
            var key = dataRecord.GetHashCode();
            if (CacheDREB.ContainsKey(key))
            {
                return (IDataReaderEntityBuilder<Entity>) CacheDREB[key];
            }

            IDataReaderEntityBuilder<Entity> dynamicBuilder = new IDataReaderEntityBuilder<Entity>();
            DynamicMethod method = new DynamicMethod("DynamicCreateEntity", typeof (Entity),
                                                     new Type[] {typeof (IDataRecord)}, typeof (Entity), true);
            ILGenerator generator = method.GetILGenerator();
            LocalBuilder result = generator.DeclareLocal(typeof (Entity));
            generator.Emit(OpCodes.Newobj, typeof (Entity).GetConstructor(Type.EmptyTypes));
            generator.Emit(OpCodes.Stloc, result);
            for (int i = 0; i < dataRecord.FieldCount; i++)
            {
                PropertyInfo propertyInfo = typeof (Entity).GetProperty(dataRecord.GetName(i));
                Label endIfLabel = generator.DefineLabel();
                if (propertyInfo != null && propertyInfo.GetSetMethod() != null)
                {
                    generator.Emit(OpCodes.Ldarg_0);
                    generator.Emit(OpCodes.Ldc_I4, i);
                    generator.Emit(OpCodes.Callvirt, isDBNullMethod);
                    generator.Emit(OpCodes.Brtrue, endIfLabel);
                    generator.Emit(OpCodes.Ldloc, result);
                    generator.Emit(OpCodes.Ldarg_0);
                    generator.Emit(OpCodes.Ldc_I4, i);
                    generator.Emit(OpCodes.Callvirt, getValueMethod);
                    generator.Emit(OpCodes.Unbox_Any, dataRecord.GetFieldType(i));
                    generator.Emit(OpCodes.Callvirt, propertyInfo.GetSetMethod());
                    generator.MarkLabel(endIfLabel);
                }
            }
            generator.Emit(OpCodes.Ldloc, result);
            generator.Emit(OpCodes.Ret);
            dynamicBuilder.handler = (Load) method.CreateDelegate(typeof (Load));
            CacheDREB.Add(key, dynamicBuilder);

            return dynamicBuilder;
        }
    }

    public static class IDataReaderExtend
    {
        public static TResult Convert<TResult>(this IDataReader dr) // where TResult : class, new()
        {
            IDataReaderEntityBuilder<TResult> eblist = IDataReaderEntityBuilder<TResult>.CreateBuilder(dr);
            var result = eblist.Build(dr);
            return result;
        }
    }
}