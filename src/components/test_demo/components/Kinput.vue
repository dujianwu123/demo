<template>
  <div>
    <h1>{{name}}</h1>
    <input type="text" v-model="name" />
    <KinputChild v-model="name"></KinputChild>
  </div>
</template>

<script>
import KinputChild from './KinputChild.vue'
export default {
  name: 'Kinput',
  data () {
    return {
      name: 'xx'
    }
  },
  components: {
    KinputChild
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    border: 1px solid red;
  }
  input {
    border: 2px solid blue;
    margin: 10px;
  }
</style>
