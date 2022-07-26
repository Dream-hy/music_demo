<template>
  <van-cell :title="name" :label="author + ' - '+ name"  :key="id">
  <template #right-icon>
        <van-icon name="play-circle-o"  size="0.6rem" @click="playFn"/>
      </template>
    </van-cell>
</template>

<script>
export default {
  props:{
    name:String, //歌名
    author:String,//歌手
    id:Number,//歌曲Id(标记这首歌曲为将来跳转播放页做准备)
  },
  methods:{
    playFn(){
      this.$router.push({
        path:'/play',
        query:{
          id:this.id //歌曲id,通过路由跳转传递过去
        }
      })
    }
  }
}
</script>

<style>

</style>