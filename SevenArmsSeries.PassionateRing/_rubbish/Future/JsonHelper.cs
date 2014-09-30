//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using Newtonsoft.Json.Converters;
//using Newtonsoft.Json;

//namespace SevenArmsSeries.PassionateRing.Common
//{
//    public class JsonHelper
//    {
//        public static string Convert<T>(T t)
//        {
//            IsoDateTimeConverter timeConverter = new IsoDateTimeConverter();
//            timeConverter.DateTimeFormat = "yyyy-MM-dd HH:mm:ss";
//            var result = JsonConvert.SerializeObject(t, Newtonsoft.Json.Formatting.Indented, timeConverter);
//            return result;
//        }

//        public static T Convert<T>(string s)
//        {
//            return JsonConvert.DeserializeObject<T>(s);
//        }
//    }
//}
