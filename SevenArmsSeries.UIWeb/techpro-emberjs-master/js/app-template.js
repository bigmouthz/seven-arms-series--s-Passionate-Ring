/*创建命名空间*/
App = Ember.Application.create();

/*创建应用视图类并指定模板名称，该类会创建一个实例并插入应用的视图层级中作为根视图*/
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

/*创建应用控制器类，为视图提供上下文，模板里的内容将由该控制器提供*/
App.ApplicationController = Ember.Controller.extend();

/*创建路由控制，用于在应用的各种状态中前进或后退，也可以通过序列化的URL直接进入到某个状态*/
App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});


/*初始化应用，启动路由进程，创建视图实例并插入到页面*/
App.initialize();

/*在HTML页面加入模板*/
<script type="text/x-handlebars" data-template-name="application">

</script>