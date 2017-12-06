import Vue from 'vue'
import Router from 'vue-router'
//前台组件
import indexLogin from '@/components/indexLogin'//登录
import reg from '@/components/reg'//注册
import demo from '@/components/demo'//主组件
import index from '@/components/index'//首页
import list from '@/components/list'//列表
import detail from '@/components/detail'//详情
import MyCenter from '@/components/MyCenter'//个人中心
import share from '@/components/share'//个人中心分享
import Money from '@/components/Money'//我的理财
import Commend from '@/components/Commend'//文章详情
import information from '@/components/information'//文章



Vue.use(Router)

var router = new Router({
    // linkActiveClass:'active',
  routes: [
      {
          path: '/',
          component: demo,
          children:[
              {path:'',component:index},
              {path:'list',component:list},
              {path:'MyCenter',component:MyCenter},
              {path:'share',component:share},
              {path:'information',component:information},
          ]
      },
      {path:'/detail',component:detail},
      {path:'/Money',component:Money},
      {path: '/login', component: indexLogin},
      {path: '/reg', component: reg},
      {path: '/Commend', component: Commend}
  ]
})
router.beforeEach(function (to,from,next) {
    if(to.path=='/'){
        if(sessionStorage.getItem('indexLogin')){
            next()
        }else{
            next('/login')
        }
    }else if(to.path=='/login'){
            next()
    }
    else{
        next()
    }
})
export default router;
