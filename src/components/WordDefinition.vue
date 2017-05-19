<template>
  <div class="definitions">
    <div>
      <router-link :to="{name:'word-list'}">&lt; Back</router-link>
    </div>
    <h2>Definitions of <em>{{ word }}</em></h2>
    <div>
      <ol>
        <li v-for="d in definitions">
          <p>{{ d.text }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'WordDefinition',
    computed: {
      word() {
        return this.$route.params.word
      },
      definitions() {
        return this.$store.state.wordDefs || []
      }
    },
    mounted(){
      this.$store.dispatch('fetchWordDefs', this.word)
    }
  }
</script>
<style scoped>
  .definitions {
    text-align: left;
  }
</style>
