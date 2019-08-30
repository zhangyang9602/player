<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="item  in hotComments" :key="item.commentId">
        <div class="left">
          <img :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}:</span>
            <span class="content">{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time|fortime}}</div>
            <div class="like-wrapper">
              <span>👍</span>
              ({{item.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotComments: []
      // nickName:'',
      // content:'',
      // avatarUrl:''
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.$axios
      .get(`/comment/hot?id=${this.$route.params.id}&type=0`)
      .then(res => {
        console.log(res);
        this.hotComments = res.data.hotComments;
        // this.nickName=res.data.hotComments.user.nickname;
        // this.avatarUrl=res.data.hotComments.user.avatarUrl;
      }).catch(err=>{});
  },
  filters: {
    fortime(d) {
      var date = new Date(d); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }
};
</script>

<style>
@import url("../assets/css/comment.css");
</style>