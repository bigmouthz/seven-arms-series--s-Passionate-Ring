using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SevenArmsSeries.PassionateRing.IronJSParse
{
    class Program
    {
        static void Main(string[] args)
        {

            new Program().test3();

            Console.ReadKey(true);
        }

        private delegate dynamic GetWithMyClass(MyClass myClass);

        void test1()
        {
            var v = new IronJS.Hosting.CSharp.Context();

          //   创建JS方法
            v.Execute("function sayHello(str){ return {msg:'Hello ，' + str};}");

            // 通过JS代码调用JS方法返回值
            dynamic dy = v.Execute("sayHello('JS Call');");

             Console.WriteLine(dy.msg);




            // 创建JS方法
            v.Execute("function sayHello2(str){ return {msg:'Hello ，' + str.msg};}");

           //  映射JS方法到指定的delegate上
            dy = v.GetFunctionAs<GetWithMyClass>("sayHello2");

          //   调用JS方法
            dy = dy(new MyClass() { msg = "C# Call" });
            
             Console.WriteLine(dy.msg);



        }
        void test2()
        {
            var v = new IronJS.Hosting.CSharp.Context();

            MyClass myClass = new MyClass() { msg = "C#实例" };

          //   将实例映射到JS变量
            v.SetGlobal("myClass", myClass);

         //    创建JS方法
            v.Execute("function sayHello(){ return {msg:'Hello ，' + myClass.msg};}");

           //  通过JS代码调用JS方法返回值
            dynamic dy = v.Execute("sayHello();");

             Console.WriteLine(dy.msg);
        }

        void test3()
        {
            var v = new IronJS.Hosting.CSharp.Context();

            string strJson = " var json ={参数1:'json参数1',参数2:{参数21:1,参数22:2},参数3:[1,2,3]};" +
                             " var json2 ={参数1:'json2参数1',参数2:{参数21:1,参数22:2},参数3:[1,2,3]};";

           //  运行代码，获取最后一个变量。（本例中返回Json2）
            dynamic dy2 = v.Execute(strJson);

          //   获取指定JS变量值
            dynamic dy1 = v.GetGlobalAs<dynamic>("json");

         //    打印数据
            Print(dy1);

          //   打印数据
            Print(dy2);

            Console.ReadKey(true);

        }
        private static void Print(dynamic dy1)
        {
                 Console.WriteLine("参数1:{0}", dy1.参数1);
              Console.WriteLine("参数21:{0}", dy1.参数2.参数21);
               Console.WriteLine("参数22:{0}", dy1.参数2.参数22);
            for (int i = 0; i < dy1.参数3.length; i++)
            {
                    Console.WriteLine("参数3[{1}]:{0}", dy1.参数3[i], i);

            }

        }
    }

    class MyClass
    {
        public string msg;
    }
}
