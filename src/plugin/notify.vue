<template>
  <div class="notify_warp">
    <div class="notify">
      {{value}}
      <input type="text"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '弹窗组件'
    }
  }
}
</script>
<style lang="scss" scoped>
  .notify_warp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.65);
    .notify{
      width: 200px;
      height: 200px;
      background: #fff;
      border-radius: 15px;
      line-height: 40px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 10;
      input {
        border-bottom: 1px solid grey;
      }
    }
  }
</style>
