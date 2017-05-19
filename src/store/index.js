import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiKey = 'adc94b8adae78f1af5008067f2b03e31d8e17cfb54b0fef16'
const basePath = 'http://api.wordnik.com:80/v4/'

const store = new Vuex.Store({
  state: {
    words: [],
    wordDefs: ''
  },
  mutations: {
    words(state, payload) {
      state.words = payload
    },
    wordDefs (state, payload) {
      state.wordDefs = payload
    }
  },
  actions: {
    fetchWords({commit}, query) {
      let params = `?caseSensitive=false&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=-1&skip=0&limit=20&api_key=${apiKey}`
      let url = `${basePath}words.json/search/${query}${params}`
      fetch(url)
        .then(response=>response.json())
        .then(json=>{
          json.searchResults.shift()
          commit('words', json.searchResults)
        })
    },
    fetchWordDefs({commit}, word) {
      let url = `${basePath}word.json/${word}/definitions?api_key=${apiKey}`
      fetch(url)
        .then(response=>response.json())
        .then(json=>{

          commit('wordDefs', json)
        })
    }
  }
})

export default store
