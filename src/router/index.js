import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '幻灵战歌',
      component: ()=>import('@/views/Game')
    }
  ]
})
