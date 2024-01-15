<template>
    <div @mousemove="yidong" @mousewheel="gun">
        <div class="bigbox" :style="{clipPath:`circle(${g}px at ${x}px ${y}px)`}">
            <div class="text">
                你在叫什么啊
            </div>
        </div>
        <div class="zhe"></div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const x = ref(0)
const y = ref(0)
const g = ref(75)
const yidong = (e) => {
    // console.log(e.offsetX);
    x.value = e.offsetX
    y.value = e.offsetY    
}
const gun =(e)=>{
    if (g.value>70&&g.value<200) {
        if (e.deltaY<0) {
            g.value+=5
        }else{
            g.value-=5
        }
    }
    if (g.value ==70) {
        if(e.deltaY<0){
            g.value+=5
        }
    }else if(g.value ==200){
        if(e.deltaY>0){
            g.value-=5
        }
    }
}
</script>
<style scoped lang='scss'>
.bigbox {
    width: 100vw;
    height: 100vh;
    background: url('../assets/3.png');
    background-size: 100% 100%;
    // background-color: black;
    // clip-path: circle(100px);
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    .text {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 200px;
        -webkit-text-stroke: 8px #fff;
        // text-shadow:1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        color: transparent;
        font-weight: bolder;
        letter-spacing: 20px;
        // background-color: black;
    }

}

.zhe {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: black;
    z-index: -1;
}
</style>