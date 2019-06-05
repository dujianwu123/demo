<template>
  <div class="warp">
    <router-link tag="button" to="/Magnifier">放大镜</router-link>
    <router-link tag="button" to="/Resume">个人简历H5</router-link>
    <router-link tag="button" to="/test">Test</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .warp {
    margin: 20px;
    button {
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 3px;
      padding: 4px 16px;
    }
    button:hover {
      border: 1px solid red;
    }
  }
</style>
