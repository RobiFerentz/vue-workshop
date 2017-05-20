
<script>
export default {
  name: 'BasicComponent',
  data() {
    return {
      myString: '',
      myArray: []
    }
  },
  computed: {
    myComputedProperty() {
      return this.myString + this.myArray.join('')
    }
  },
  methods: {
    doSomethingCool() {
      console.log('Nothing cool to do!')
    }
  },
  mounted() {
    this.doSomethingCool()
  }
  // other lifecycle method here.
}
</script>
