<template>
  <div>
    <!-- <Test></Test> -->
    <div class="box1111">
      <a-tag color="pink"><router-link to="/jiazai">加载</router-link></a-tag>
      <a-tag color="red"><router-link to="/caisedanmu">彩色弹幕</router-link></a-tag>
      <a-tag color="orange"><router-link to="/daoying">倒影</router-link></a-tag>
      <a-tag color="green"><router-link to="/diqiuxuanzhuan">地球旋转</router-link></a-tag>
      <a-tag color="cyan"><router-link to="/jianbianxuanting">渐变按钮悬停效果</router-link></a-tag>
      <a-tag color="blue"><router-link to="/lianyi">涟漪效果</router-link></a-tag>
      <a-tag color="purple"><router-link to="/shanyao">闪耀弹幕</router-link></a-tag>
      <a-tag color="pink"><router-link to="/shubiaoxuanting">鼠标悬停</router-link></a-tag>
      <a-tag color="red"><router-link to="/shubiaoyidong">鼠标移动</router-link></a-tag>
      <a-tag color="orange"><router-link to="/wanhuatong">万花筒</router-link></a-tag>
      <a-tag color="green"><router-link to="/wenzifenge">文字分割</router-link></a-tag>
      <a-tag color="cyan"><router-link to="/xingxing">星星闪动</router-link></a-tag>
      <a-tag color="blue"><router-link to="/youling">幽灵特效</router-link></a-tag>
      <a-tag color="purple"><router-link to="/faguangtexiao">发光特效</router-link></a-tag>
      <a-tag color="purple"><router-link to="/donghuatexiao">css</router-link></a-tag>
      <a-tag color="purple"><router-link to="/fen">tian</router-link></a-tag>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Test from './views/文字分割.vue'
</script>
<style lang="scss">
body {
  margin: 0;
}

.box1111 {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999999;
}
</style>