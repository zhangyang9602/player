<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" @keyup.enter="queryMusic" v-model="inputval"/>
      <button @click="queryMusic">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-link to="/singsList" class="bar-item ">搜索结果</router-link>
          <router-link to="/players" class="bar-item">歌曲播放</router-link>
           <router-link  to="/video" class="bar-item"> mv</router-link>
        <router-link to="/comment" class="bar-item">歌曲评论</router-link>
        <!-- <a class="bar-item active">搜索结果</a>
        <a class="bar-item">歌曲播放</a>
        <a class="bar-item">mv</a>
        <a class="bar-item">歌曲评论></a> -->
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputval: "绿色"
    };
  },
  methods: {
    queryMusic() {
     this.$router.push({
        path: `/singsList/${this.inputval}`
      });
    }
  },
  
   
};
</script>

<style>
</style>