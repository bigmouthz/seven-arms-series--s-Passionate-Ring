//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace xstep.Workflow
//{
//    public class DaoRelation
//    {
//        public IList<Dao> Daos { get; set; }

//        public IList<Recursion> Relations { get; set; }

//        /// <summary>
//        /// 从一维树集合 到 树关系
//        /// </summary>
//        /// <param name="trees">一维树集合</param>
//        /// <returns>只得到只有第1级的树关系</returns>
//        public static DaoRelation CaseOne(IList<OneDimensionalTree> trees)
//        {
//            DaoRelation dr = new DaoRelation();
//            foreach (var t in trees)
//            {
//                dr.Daos.Add(t);
//                var r1 = new Recursion()
//                {
//                    GuidID = t.ParentGuid,
//                    OwnerOffspring = t.GuidID,
//                    Depth = 1,
//                };
//                dr.Relations.Add(r1);
//            }
//            return dr;
//        }

//        /// <summary>
//        /// 从树关系 到 一维树集合
//        /// </summary>
//        /// <param name="drs">树关系</param>
//        /// <returns>一维树集合</returns>
//        public static IList<OneDimensionalTree> CaseOne(DaoRelation drs)
//        {
//            IList<OneDimensionalTree> trees = new List<OneDimensionalTree>();
//            foreach (var d in drs.Daos)
//            {
//                trees.Add(new OneDimensionalTree()
//                {
//                    GuidID = d.GuidID,
//                    Name = d.Name,
//                });
//            }

//            foreach (var r in drs.Relations)
//            {
//                foreach (var t in trees)
//                {
//                    if (r.OwnerOffspring.Equals(t.GuidID) && r.Depth.Equals(1))
//                    {
//                        t.ParentGuid = r.Owner;
//                        break;
//                    }
//                }
//            }
//            return trees;
//        }

//        /// <summary>
//        /// 从二维树 到 树关系
//        /// </summary>
//        /// <param name="tree">二维树</param>
//        /// <returns>只得到只有第1级的树关系</returns>
//        public static DaoRelation CaseTwo(TwoDimensionalTree tree)
//        {
//            DaoRelation dr = new DaoRelation();
//            CaseTwo(dr, tree);
//            return dr;
//        }

//        /// <summary>
//        /// 从二集合维树 到 树关系
//        /// </summary>
//        static void CaseTwo(DaoRelation dr, TwoDimensionalTree tree)
//        {
//            dr.Daos.Add(tree);
//            //var r0 = new Recursion()
//            //{
//            //    Owner = tree.GuidID,
//            //    OwnerOffspring = tree.GuidID,
//            //    Depth = 0,
//            //};
//            //dr.Relations.Add(r0);

//            foreach (var t in tree.Children)
//            {
//                var r1 = new Recursion()
//                {
//                    Owner = tree.GuidID,
//                    OwnerOffspring = t.GuidID,
//                    Depth = 1,
//                };
                
//                dr.Relations.Add(r1);
//                CaseTwo(dr, t);
//            }
//        }


//        /// <summary>
//        /// 从树关系 到 二维树集合
//        /// </summary>
//        /// <param name="drs"></param>
//        /// <returns></returns>
//        public static TwoDimensionalTree CaseTwo(DaoRelation drs)
//        {
//            TwoDimensionalTree root = new TwoDimensionalTree();

//            IDictionary<string, TwoDimensionalTree> trees = new Dictionary<string, TwoDimensionalTree>();
//            foreach (var d in drs.Daos)
//            {
//                if (!trees.ContainsKey(d.GuidID))
//                {
//                    trees.Add(d.GuidID, new TwoDimensionalTree() { GuidID = d.GuidID, Name = d.Name, Children = new List<TwoDimensionalTree>() });
//                }
//            }

//            foreach (var r in drs.Relations)
//            {
//                if (string.IsNullOrWhiteSpace(r.Owner))
//                { 
//                }
//            }

//            return root;
//        }
//    }

//    public class OneDimensionalTree : Dao
//    {
//       public  string ParentGuid { get; set; }
//    }

//    public class TwoDimensionalTree : Dao 
//    {
//       public IList<TwoDimensionalTree> Children { get; set; }
//    }

//    public static class TreeExtension
//    {
//        public static IEnumerable<TwoDimensionalTree> Cast(IEnumerable<OneDimensionalTree> source)
//        {
//            return Cast<OneDimensionalTree, TwoDimensionalTree>(
//                 source,
//                 (ss) => { return ss.Where((s) => { return string.IsNullOrWhiteSpace(s.GuidID); }); },
//                 (ss, s0) => { return ss.Where((s) => { return s0.GuidID.Equals(s.ParentGuid); }); },
//                 (s) => { return new TwoDimensionalTree() { GuidID = s.GuidID, Name = s.Name, }; },
//                 (p, c) => { if (p.Children == null) p.Children = new List<TwoDimensionalTree>(); p.Children.Add(c); }
//                 );
//        }

//        public static IEnumerable<T> Cast<S, T>(this IEnumerable<S> s_allitems,
//    Func<IEnumerable<S>, IEnumerable<S>> getroot,
//    Func<IEnumerable<S>, S, IEnumerable<S>> getchildren,
//    Converter<S, T> converter,
//    Action<T, T> addchild)
//        {
//            List<T> t_parentitems = new List<T>();
//            var s_parentitems = getroot(s_allitems);
//            if (s_parentitems == null || s_parentitems.Count() == 0) return t_parentitems;

//            foreach (var s in s_parentitems)
//            {
//                var t = converter(s);
//                t_parentitems.Add(t);
//                var s_items = getchildren(s_allitems, s);
//                Cast(s_allitems, s_items, t, getchildren, converter, addchild);
//            }
//            return t_parentitems;
//        }

//        public static void Cast<S, T>(this IEnumerable<S> s_allitems,
//    IEnumerable<S> s_items,
//    T t_parentitem,
//    Func<IEnumerable<S>, S, IEnumerable<S>> getchildren,
//    Converter<S, T> converter,
//    Action<T, T> addchild)
//        {
//            if (t_parentitem == null) return;
//            if (s_items == null) return;

//            foreach (var s_item in s_items)
//            {
//                var t_item = converter(s_item);
//                addchild(t_parentitem, t_item);

//                var s_c_items = getchildren(s_allitems, s_item);
//                if (s_c_items != null && s_c_items.Count() > 0)
//                    Cast(s_allitems, s_c_items, t_item, getchildren, converter, addchild);
//            }
//        }

//        public static IEnumerable<OneDimensionalTree> Cast(IEnumerable<TwoDimensionalTree> source, Func<TwoDimensionalTree, OneDimensionalTree> converter)
//        {
//            List<OneDimensionalTree> target = new List<OneDimensionalTree>();
//            foreach (var s in source) 
//            {
//                target.Add(new OneDimensionalTree() { });
//                Cast(target, s, converter);
//            }
//            return target;
//        }

//        public static void Cast(IList<OneDimensionalTree> target, TwoDimensionalTree source, Func<TwoDimensionalTree, OneDimensionalTree> converter)
//        {
//            if (source != null)
//            {
//                if (source.Children != null && source.Children.Count > 0)
//                {
//                    foreach (var s in source.Children)
//                    {
//                        target.Add(converter(s));
//                        Cast(target, s, converter);
//                    }
//                }
//            }
//        }
   
//    }
//}
