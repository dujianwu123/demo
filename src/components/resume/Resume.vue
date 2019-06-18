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
  data () {
    return {
      n: 0,
      imgData: null,
      delayTimer: null,
      len: 0
    }
  },
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
        this.imgData = res.resumeDataImage
        this.len = this.imgData.length
        this.run(this.done)
        this.maxDelay(this.done)
      }
    },
    run (callback) {
      this.imgData.forEach(item => {
        let tempImg = new Image()
        tempImg.onload = () => {
          tempImg = null
          $('.current').css('width', ((++this.n) / this.len) * 100 + '%')
          // 加载完成:执行回调函数(让当前LOADING页面消失)
          if (this.n === this.len) {
            clearTimeout(this.delayTimer)
            callback && callback()
          }
        }
        let src = require(`../../${item}`)
        tempImg.src = src
      })
    },
    // 设置最长等待时间（假设10s，到达10s我们看加载多少了，如果已经到达90%以上，可以正常访问内容了，如果不足这个比例，直接提示用户当前网络状况不佳，稍后重试）
    maxDelay (callback) {
      this.delayTimer = setTimeout(() => {
        clearTimeout(this.delayTimer)
        // 完成大于90% 就算完成
        if (this.n / this.len >= 0.9) {
          $('.current').css('width', '100%')
          callback && callback()
          return
        }
        alert(' 非常遗憾，当前您的网络状况不佳，请稍后在试！')
      // window.location.href = 'http://www.qq.com';//=>此时我们不应该继续加载图片，而是让其关掉页面或者是跳转到其它页面
      }, 10000)
    },
    done () {
      // 停留一秒钟在进入下一环节
      setTimeout(() => {
        $('.loadingBox').remove()
      }, 1000)
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
          width: 0%;
          height: 100%;
          background: -webkit-linear-gradient(left bottom,  #5CB85C 0%, #5CB85C 25%, #74C274 25%, #74C274 50%, #5CB85C 50%, #5CB85C 75%, #74C274 75%, #74C274 100%);
          background-size: .3rem .3rem;
          animation: loadingMove 1s linear 0s infinite both;
          transition: .3s;
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
