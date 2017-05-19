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
      <li v-for="word in reverseWords">
        <router-link :to="{ name: 'word-def', params: { word: word.word }}">{{ word.word }}</router-link>
      </li>
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
      query: 'V',
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      reverse: false
    }
  },
  methods: {
    changeQuery(l) {
      this.query = l
      this.fetchWordList()
    },
    fetchWordList() {
      this.$store.dispatch('fetchWords', this.query)
    }
  },
  computed: {
    words(){
      return (this.$store && this.$store.state.words) || []
    },
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
