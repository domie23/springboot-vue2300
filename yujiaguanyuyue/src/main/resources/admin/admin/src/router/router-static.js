import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import news from '@/views/modules/news/list'
    import taochan from '@/views/modules/taochan/list'
    import taochanOrder from '@/views/modules/taochanOrder/list'
    import ticebaogao from '@/views/modules/ticebaogao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yujia from '@/views/modules/yujia/list'
    import yujiaOrder from '@/views/modules/yujiaOrder/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryTaochan from '@/views/modules/dictionaryTaochan/list'
    import dictionaryTaochanOrder from '@/views/modules/dictionaryTaochanOrder/list'
    import dictionaryTaochanOrderPayment from '@/views/modules/dictionaryTaochanOrderPayment/list'
    import dictionaryTicebaogao from '@/views/modules/dictionaryTicebaogao/list'
    import dictionaryYujia from '@/views/modules/dictionaryYujia/list'
    import dictionaryYujiaOrder from '@/views/modules/dictionaryYujiaOrder/list'
    import dictionaryYujiaOrderPayment from '@/views/modules/dictionaryYujiaOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryTaochan',
        name: '套餐类型',
        component: dictionaryTaochan
    }
    ,{
        path: '/dictionaryTaochanOrder',
        name: '订单类型',
        component: dictionaryTaochanOrder
    }
    ,{
        path: '/dictionaryTaochanOrderPayment',
        name: '订单支付类型',
        component: dictionaryTaochanOrderPayment
    }
    ,{
        path: '/dictionaryTicebaogao',
        name: '报告类型',
        component: dictionaryTicebaogao
    }
    ,{
        path: '/dictionaryYujia',
        name: '瑜伽类型',
        component: dictionaryYujia
    }
    ,{
        path: '/dictionaryYujiaOrder',
        name: '订单类型',
        component: dictionaryYujiaOrder
    }
    ,{
        path: '/dictionaryYujiaOrderPayment',
        name: '订单支付类型',
        component: dictionaryYujiaOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '交流平台',
        component: forum
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
    ,{
        path: '/news',
        name: '通知公告',
        component: news
      }
    ,{
        path: '/taochan',
        name: '套餐',
        component: taochan
      }
    ,{
        path: '/taochanOrder',
        name: '套餐购买',
        component: taochanOrder
      }
    ,{
        path: '/ticebaogao',
        name: '体测报告',
        component: ticebaogao
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yujia',
        name: '瑜伽',
        component: yujia
      }
    ,{
        path: '/yujiaOrder',
        name: '瑜伽预约',
        component: yujiaOrder
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
