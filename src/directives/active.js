import Vue from 'vue'

Vue.directive('active', {
  componentUpdated(el, {value}){
    el.className = el.className.replace(' active', '')
    if(value) {
      el.className += ' active'
    }
  }
})
