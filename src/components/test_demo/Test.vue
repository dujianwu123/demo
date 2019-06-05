<template>
  <div>
    <router-link to='/test/shopingcart' tag="button">购物车</router-link>
    <router-view></router-view>
    <router-link to='/kinput' tag="button">k-input</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 3px;
  padding: 4px 16px;
}
button:hover {
  border: 1px solid red;
}
</style>
