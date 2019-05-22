<template>
  <section ref="warp" class="magnifierBox">
    <div ref="smallBox" @mouseenter="mouseenter" @mouseleave="mouseleave" @mousemove="mousemove" class="smallBox">
      <img src="../../assets/img/magnifier/1.jpg" alt="" />
      <div ref="mark" class="mark"></div>
    </div>
    <div ref="bigBox" class="bigBox">
      <img ref="bigImg" src="../../assets/img/magnifier/2.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Magnifire',
  data () {
    return {
      l: 0,
      t: 0
    }
  },
  methods: {
    mouseenter (event) {
      this.$refs.mark.style.display = 'block'
      this.$refs.bigBox.style.display = 'block'
      this.offsetPar(event.target)
    },
    mousemove (event) {
      let oSmallBox = this.$refs.smallBox
      let curL = event.pageX - this.l - this.$refs.mark.offsetWidth / 2
      let curT = event.pageY - this.t - this.$refs.mark.offsetWidth / 2
      curL = curL < 0 ? 0 : (curL > 200 ? 200 : curL)
      curT = curT < 0 ? 0 : (curT > 200 ? 200 : curT)
      this.$refs.mark.style.left = curL + 'px'
      this.$refs.mark.style.top = curT + 'px'
      let reatX = (this.$refs.bigBox.offsetWidth - this.$refs.bigImg.offsetWidth) / (oSmallBox.offsetWidth - this.$refs.mark.offsetWidth)
      let reatY = (this.$refs.bigBox.offsetHeight - this.$refs.bigImg.offsetHeight) / (oSmallBox.offsetHeight - this.$refs.mark.offsetHeight)
      let l = curL * reatX
      let t = curT * reatY
      this.$refs.bigImg.style.left = l + 'px'
      this.$refs.bigImg.style.top = t + 'px'
    },
    mouseleave () {
      this.$refs.mark.style.display = 'none'
      this.$refs.bigBox.style.display = 'none'
    },
    offsetPar (obj) {
      this.l = obj.offsetLeft
      this.t = obj.offsetTop
      while (obj.offsetParent) {
        obj = obj.offsetParent
        this.l = this.l + obj.offsetLeft
        this.t = this.t + obj.offsetTop
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .magnifierBox {
    margin: 20px auto;
    width: 600px;
    height: 300px;
    overflow: hidden;
    .smallBox, .bigBox {
      position: relative;
      float: left;
      width: 300px;
      height: 100%;
      overflow: hidden;
    }
    .smallBox {
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      .mark{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100px;
        height: 100px;
        background: #E01D20;
        opacity: 0.3;
        filter: alpha(opacity=30);
        border-radius: 50%;
        cursor: move;
        display: none;
      }
    }
    .bigBox {
        display: none;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 900px;
          height: 900px;
          // mark/small-box = big-box/big-img 所以算出大的图片等于900px x 900px
          // 20/(smallBox.width-mark.width) = x/(bigImg.width-bigBox.width)  已知20是mark的移动距离，x就是大图的移动距离为60，即大图的移动距离是mark的3倍
        }
      }
  }
</style>
