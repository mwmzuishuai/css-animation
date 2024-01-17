<template>
    <div class="bigbox">
        <div class="box">
            <div class="bb box1">M</div>
            <div class="bb box2">W</div>
            <div class="bb box3">M</div>
            <a-qrcode error-level="H" value="https://www.antdv.com" color="#fff" icon="https://www.antdv.com/assets/logo.1ef800a8.svg" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const text = ref('https://www.antdv.com/');
</script>
<style scoped lang='scss'>
.bigbox {
    height: 100vh;
    background: black;
    overflow: hidden;
    display: flex;

    .box {
        display: flex;
        margin: auto;

        .bb {
            font-size: 100px;
            color: #fff;
            font-weight: bold;
            margin: 0 20px;
            text-align: center;
            // opacity: 1;
            // transform: scale(1);
            // transition: all 1s linear;
        }

        .bb:hover {
            animation: fang 1s linear forwards;
            // opacity: 0;
            // transform: scale(1.8);
            // filter: blur(10px);

        }
    }
}

@keyframes fang {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(1.8);
        filter: blur(10px);
    }
}
</style>