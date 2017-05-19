<template>
  <button @click="onClick"><slot></slot></button>
</template>
<script>
  export default {
    name: 'LetterButton',
    props: {
      click: Function
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>
<style scoped>
  button {
    padding: 5px;
    border-radius: 2px;
    border: 1px solid #42b983;
    color: #2c3e50;
    font-weight: 600;
    outline: none;
  }
  button.active {
    border: 1px solid red;
  }
</style>
