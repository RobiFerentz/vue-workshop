<template>
  <div>
    <a @mouseover="onMouseOver" :href="url"><slot></slot></a>
  </div>
</template>
<script>
  export default {
    name: 'BlockLink',
    props: ['hover', 'url'],
    methods: {
      onMouseOver() {
        this.$emit('hover')
      }
    }
  }
</script>
<style scoped>
  a {
    display: block;
  }
</style>
