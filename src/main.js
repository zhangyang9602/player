import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Slider from './components/Slider.vue'
// 导入element-ui文件
import ElementUI from 'element-ui'
import Axios from 'axios'
// 导入elementcss样式 
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

//设置基地址
Axios.defaults.baseURL = 'https://autumnfish.cn'
Vue.prototype.$axios=Axios

//导入组件
import SingsList from './components/singsList.vue'
import Players from './components/players.vue'
import Video from './components/video.vue'
import Comment from './components/comment.vue'


// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(ElementUI);
Vue.use(VueRouter)
//导入app组件样式,全局都可以使用
import './assets/css/index.css'
import './assets/css/iconfont.css'

//定义路由规则
const routes=[
  {
    path:'/slider',
    component:Slider
  },
  // redirect路由重定向
  { path: '/', redirect: '/slider' },
  {
    path:'/singsList/:keywords',
    component:SingsList
  },
  {
    path:'/players/:id',
    component:Players
  },
  {
    path:'/video/:mvid',
    component:Video
  },
  {
    path:'/comment/:id',
    component:Comment
  },
]

//创建router实例
const router =new VueRouter({
  routes,
  linkExactActiveClass:'active',
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
