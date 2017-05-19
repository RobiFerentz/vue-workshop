<template>
  <div class="hello">
    <ul>
      <li class="inline" v-for="l in letters">
        <LetterButton :key="l" :letter="l" @click="changeQuery(l)">{{l}}</LetterButton>
      </li>
    </ul>
    <h1>Your list of {{ query }} words</h1>
    <button @click="reverse = !reverse">{{ reverse ? 'Original' : 'Reverse' }}</button>
    <ul>
      <li v-for="word in reverseWords">{{ word.word }}</li>
    </ul>

  </div>
</template>

<script type="text/babel">
  import LetterButton from './LetterButton.vue'
export default {
  name: 'WordList',
  components: { LetterButton },
  data () {
    return {
      words: [],
      query: 'V',
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      reverse: false
    }
  },
  methods: {
    changeQuery(l) {
      this.query = l
      this.words = []
      this.fetchWordList()
    },
    fetchWordList() {
      let apiKey = 'adc94b8adae78f1af5008067f2b03e31d8e17cfb54b0fef16'
      let basePath = 'http://api.wordnik.com:80/v4/'
      let {query} = this
      let params = `?caseSensitive=false&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=-1&skip=0&limit=20&api_key=${apiKey}`
      let url = `${basePath}words.json/search/${query}${params}`
      fetch(url)
        .then(response=>response.json())
        .then(json=>{
          json.searchResults.shift()
          this.words = json.searchResults
        })
    }
  },
  computed: {
    reverseWords() {
      return this.reverse ? Array.from(this.words).reverse() : this.words
    }
  },
  mounted() {
    this.fetchWordList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

li.inline {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
