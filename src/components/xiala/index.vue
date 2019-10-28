<template>
  <div>
    <mt-loadmore
      :top-method="loadTop"
      ref="loadmore"
    >
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        ref="uuu"
      >
        <li v-for="(item) in list" :key="item.aid">{{ item.title }}</li>
      </ul>
    </mt-loadmore>
    <mt-button ref="moreLoading" type="default">加载中...</mt-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      loading: false,
      page: 1
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      let url =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" +
        this.page;
      axios.get(url).then(data => {
        if (data && data.status === 200) {
          let result = data.data.result;
          this.list = this.list.concat(result);
          ++this.page;
          if (result.length < 20) {
            this.loading = true;
            this.$refs.moreLoading.$el.style.display = "none";
          } else {
            this.loading = false;
          }
        }
      });
    },
    loadTop() {
      this.loading = false;
      this.page=1;
      this.$refs.moreLoading.$el.style.display = "block";
      this.list=[];
      // let url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.page;
      // axios.get(url).then(data => {
      //   if (data && data.status === 200) {
      //     let result = data.data.result;
      //     this.list = result;
      //     ++this.page;
      //   }
      // });
      this.loadMore();
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>

<style lang=scss scoped>
ul {
  list-style: none;
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #989191;
    border-bottom: 1px solid red;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>