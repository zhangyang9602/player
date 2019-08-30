<template>
  <div>
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="(item,index ) in imgList" :key="index">
        <img class="small" :src="item.imageUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.$axios.get('/banner?t=' + Date.now()).then(res => {
      this.imgList = res.data.banners;
    }).catch(err=>{});
  }
};
</script>

<style>
</style>