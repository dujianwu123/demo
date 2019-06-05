<template>
  <div class="warp">
    <h1>{{title}}</h1>
    <input type="text" v-model="val">
    <button @click="add">添加</button>
    <button @click="clear">清空</button>
    <ul>
      <li
      v-for="(item, index) in todos"
      :key="index"
      :class="{done:item.done}"
      >
        <input type="checkbox" v-model="item.done"/>
        {{item.title}}
      </li>
    </ul>
    <div class="foot">{{num}}(未做)/{{total}}(总共)</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '购物车',
      todos: [],
      val: ''
    }
  },
  mounted () {
    const todos = localStorage.getItem('todos')
    if (todos) {
      this.todos = JSON.parse(todos)
    } else {
      this.todos = [
        {title: '吃饭', done: true},
        {title: '睡觉', done: false},
        {title: '打游戏', done: false}
      ]
    }
  },
  methods: {
    add () {
      this.todos.push({title: this.val, done: false})
      this.val = ''
    },
    clear () {
      this.todos = this.todos.filter(v => !v.done)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    }
  },
  computed: {
    num () {
      return this.todos.filter(v => !v.done).length
    },
    total () {
      return this.todos.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .warp {
    width: 500px;
    margin: 0 auto;
    border: 1px solid red;
    h1 {
      width: 100%;
      line-height: 20px;
      text-align: center;
    }
    input {
      border: 1px solid blue;
    }
    ul > li {
      padding: 10px;
      &.done {
        color: red;
        text-decoration: line-through;
      }
    }
    .foot {
      padding: 10px;
    }
  }
</style>
