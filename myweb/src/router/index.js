import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/abuot/About'
import News from '@/components/news/News'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/about',
    name: 'Abuot',
    component: Abuot
  }, {
    path: '/news',
    name: 'News',
    component: News
  }]
})
