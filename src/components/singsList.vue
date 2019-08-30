<template>
  <div class="result-wrapper" >
    <div class="song" v-for="(item,index) in songlist" :key="index">
      <div class="name">
        <span class="iconfont icon-play" @click="playMusic(item.id)"></span>
        <a href="#" @click="comment(item.id)"> {{item.name}}</a>
        <span class="iconfont icon-editmedia" v-if="item.mvid!=0" @click="mvPlay(item.mvid)"></span>
      </div>
      <div class="singer">{{item.artists|formast}}</div>
      <div class="album">{{item.album.name}}</div>
      <div class="time">{{item.duration|format}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */    
export default {
    data(){
        return {
            songlist:[],
            
        }
    },
    methods: {
        
    },
    filters:{
        formast(d){
            let arr=[];
            for(var i = 0;i<d.length;i++){
                arr.push(d[i].name);
            }
            return arr.join('/');
        },
        format(d){
            let Seconds=d/1000;
            let sec=Math.floor(Seconds%60);
            sec=sec<10?'0'+sec:''+sec;
            let min=Math.floor(Seconds/60);
            min=min<10?'0'+min:''+min;
        return `${min}:${sec}`;
            
        }
    },
   created() {
        this.queryMusic();
    },
    watch: {
        'this.$router.params.keywords'(){
            this.queryMusic();
        }
    },
    methods: {
        queryMusic(){
            
            this.$axios.get(`/search?keywords=${this.$route.params.keywords}`)
        .then(res=>{
            this.songlist=res.data.result.songs;
        }).catch(err=>{})
        },
        playMusic(id){
            this.$router.push({
                path:`/players/${id}`
            });
        },
        mvPlay(id){
            this.$router.push({
                path:`/video/${id}`
            })
        },
        comment(id){
            this.$router.push({
                path:`/comment/${id}`
            })
        }
    },
};
</script>

<style>
@import url('../assets/css/results.css');
</style>