<template>
  <div class="warp">
    <div class="my">
      <router-link tag="button" to="/Magnifier">放大镜</router-link>
      <router-link tag="button" to="/Resume">个人简历H5</router-link>
      <button @click="show">弹窗</button>
      <router-link tag="button" to="/test">Test</router-link>
      <router-link tag="button" to="/testCar">TestCar2</router-link>
    </div>
    <div>
      <mt-button @click.native="toXiala" type="primary">default</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    show() {
      this.$notify("请输入验证码", { delay: 5000 });
    },
    toXiala() {
      this.$router.push('/xiala');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.warp {
  margin: 20px;
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  .my {
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
}
</style>
