<template>
  <main class="mainBox">
    <section class="loadingBox">
      <div class="title">
        <h1>杜建武</h1>
        <h2>H5个人简历</h2>
      </div>
      <div class="progress">
        <div class="current"></div>
      </div>
    </section>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Resume',
  mounted () {
    this.getInitImg()
  },
  methods: {
    getInitImg () {
      axios.get('/api/resume.json').then(this.getInitImgSucc)
    },
    getInitImgSucc (res) {
      res = res.data
      if (res.ret && res.resumeDataImage) {
        console.log($('.title').get(0))
      }
    }
  }
}
</script>
<style>
html,body {
  height: 100%;
  overflow: hidden;
  /* font-size: 100px; */
  /* 640PX设计稿尺寸中：1REM = 100PX */
}
</style>
<style lang="scss" scoped>
  @import '~styles_alias/varibles.scss';
  .mainBox {
    max-width: 640px;
    font-size: .24rem;
    font-family: "Microsoft JhengHei";
    height: 100%;
    margin: 0 auto;
    background: #fff;
    color: #fff;
    .loadingBox {
      @include warpBox;
      background: #000;
      .title {
        position: absolute;
        left: 0;
        top: 50%;
        // -.7(正中间)+1.5（距离中间靠上的位移）
        margin-top: -2.2rem;
        height: 1.4rem;
        width: 100%;
        color: #fff;
        h1 {
          line-height: .75rem;
          font-size: .5rem;
          text-align: center;
          letter-spacing: .04rem;
        }
        h2 {
          padding-top: .2rem;
          line-height: .45rem;
          text-align: center;
          letter-spacing: .04rem;
          font-size: .24rem;
        }
      }
      .progress {
        position: absolute;
        width: 4.6rem;
        height: .3rem;
        background: #fff;
        top: 50%;
        left: 50%;
        margin: .85rem 0 0 -2.3rem;
        .current {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: -webkit-linear-gradient(left bottom,  #5CB85C 0%, #5CB85C 25%, #74C274 25%, #74C274 50%, #5CB85C 50%, #5CB85C 75%, #74C274 75%, #74C274 100%);
          background-size: .3rem .3rem;
          animation: loadingMove 1s linear 0s infinite both;
        }
      }
    }
  }
  @keyframes loadingMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -.3rem;
    }
  }
</style>
