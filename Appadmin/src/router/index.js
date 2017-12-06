import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import login from '@/components/login'
import table from '@/components/table'
import addUser from '@/components/addUser'
import editUser from '@/components/editUser'
import category from '@/components/category'
import addCategory from '@/components/addCategory'
import editCategory from '@/components/editCategory'
import content from '@/components/content'
import message from '@/components/message'



Vue.use(Router)

var router = new Router({
  routes: [
      {
          path: '/admin',
          component: admin,
          children:[
              {path:'user',component:table},
              {path:'add',component:addUser},
              {path:'edit',component:editUser},
              {path:'category',component:category},
              {path:'addCategory',component:addCategory},
              {path:'editCategory',component:editCategory},
              {path:'content',component:content},
              {path:'message',component:message},
          ]
      },
      {path: '/login', component: login},
  ]
})
router.beforeEach(function (to,from,next) {
    if(to.path=='/login'){
        next()
    }else if(to.path=='/admin'){
        if(sessionStorage.getItem('loginInfo')){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
export default router;
