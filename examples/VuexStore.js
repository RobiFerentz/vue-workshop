/**
 * Created by robertferentz on 2017-05-20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state1: 'Guy Fawkes',
    state2: ['Stephen Fry', 'Hugo Weaving', 'Natalie Portman']
  },
  mutations: { // should all be synchronous code
    mutation1(state, payload) {
      state.state1 = payload
    }
  },
  actions: { // do sync/async code, commit when done
    action1({commit}, newGuy) {
      commit('mutation1', newGuy)
    }
  }
})
