import Vue from 'vue'
import Router from 'vue-router'
import WordList from '@/components/WordList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordList',
      component: WordList
    }
  ]
})
