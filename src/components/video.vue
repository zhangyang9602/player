<template>
   <div class="video">
    <div class="title-wrapper">
      <span class='tag'>mv</span>
      <span class='title'>{{name}}</span>
      <span class='artist'>{{artistName}}</span>
    </div>
    <video :src="brs" controls></video>
  </div>
</template>

<script>
export default {
    data() {
        return {
            artistName:'',
            brs:'',
            name:'',
            desc:''
        }
    },
created() {
    // console.log(this.$route.params.mvid);
    this.$axios.get(`/mv/detail?mvid=${this.$route.params.mvid}`)
    .then(res=>{
        this.name=res.data.data.name;
        this.brs=res.data.data.brs['480'];
        this.artistName=res.data.data.artistName;
        this.desc=res.data.data.desc;
    }).catch(err=>{})
},
}
</script>

<style>
@import url('../assets/css/video.css');
</style>