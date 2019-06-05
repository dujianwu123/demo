<template>
  <div>
    <input :type="text" :value="value" @input="onInput"/>
  </div>
</template>

<script>
export default {
  name: 'Kinput',
  props: {
    value: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      // 派发事件 通知父组件输入值变化
      this.$emit('input', e.target.value)
      // 通知父组件校验
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    border: 2px solid blue;
    margin: 10px;
  }
</style>
