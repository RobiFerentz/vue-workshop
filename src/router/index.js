import Vue from 'vue'
import Router from 'vue-router'
import WordList from '@/components/WordList'
import WordDefinition from '@/components/WordDefinition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'word-list',
      component: WordList
    },
    {
      path: '/def/:word',
      name: 'word-def',
      component: WordDefinition
    }
  ]
})
