/**
 * Created by robertferentz on 2017-05-20.
 */
import Vue from 'vue'
Vue.directive('focus', {
  updated: function (el) {
    // Focus the element on every update.
    el.focus()
  }
})
