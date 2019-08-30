<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="songUrl" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songsname}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{singer|format}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{songal}}</span>
      </div>
      <audio class="audio" controls :src="playerUrl"></audio>
      <ul class="lyric-container">
        <li class="lyric">难以忘记</li>
        <li class="lyric">初次见你</li>
        <li class="lyric">那双迷人的小眼睛</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerUrl: "",
      singer: [],
      songUrl: "",
      songsname: "",
      songal: ""
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.$axios.get(`/song/url?id=${this.$route.params.id}`).then(res => {
      this.playerUrl = res.data.data[0].url;
      // console.log(this.playerUrl);
    }).catch(err=>{});
    this.$axios.get(`/song/detail?ids=${this.$route.params.id}`).then(res => {
      // console.log(res);
      this.songsname = res.data.songs[0].name;
      this.songUrl = res.data.songs[0].al.picUrl;
      this.songal = res.data.songs[0].al.name;
      this.singer = res.data.songs[0].ar;
    }).catch(err=>{});
  },
  filters: {
    format(d){
      let arr=[];
      for(var i = 0;i<d.length;i++){
        arr.push(d[i].name);
      }
      return arr.join('/');
    }
  }
};
</script>

<style>
@import url("../assets/css/player.css");
</style>