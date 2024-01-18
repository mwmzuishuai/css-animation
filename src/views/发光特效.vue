<template>
    <div class="bigbox">
        <div class="box">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
            <div class="box4"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped lang='scss'>
.bigbox {
    height: 100vh;
    background: black;
    display: flex;
    overflow: hidden;

    .box {
        width: 10vw;
        height: 10vw;
        margin: auto;
        // background: aqua;
        position: relative;
        // box-shadow: 0 0 10px aqua;


        .box1 {
            position: absolute;
            height: 20%;
            // width: 100%;
            top: 0;
            left: 0;
            // background: aqua;
            background: linear-gradient(to right, transparent, aqua);
            animation: fei1 4s linear infinite;
        }

        .box2 {
            position: absolute;
            width: 20%;
            // height: 100%;
            top: 0;
            right: 0;
            background: linear-gradient(to bottom, transparent, aqua);
            animation: fei2 4s linear infinite;
            animation-delay: 1s;

        }

        .box3 {
            position: absolute;
            height: 20%;
            // width: 100%;
            bottom: 0;
            right: 0;
            background: linear-gradient(to left, transparent, aqua);
            animation: fei1 4s linear infinite;
            animation-delay: 2s;
        }

        .box4 {
            position: absolute;
            width: 20%;
            // height: 100%;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top, transparent, aqua);
            animation: fei2 4s linear infinite;
            animation-delay: 3s;

        }

    }

    .box:hover::before {
        content: '';
        width: 100%;
        height: 100%;
        background: aqua;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0 0 40px aqua;
    }
}

@keyframes fei1 {
    0% {
        width: 0;
    }
    25%{
        width: 100%;
    }
    75%{
        display: none;

    }
    100% {
        display: none;

    }
}

@keyframes fei2 {
    0% {
        height: 0;
    }
    25%{
        height:100%;
    }
    75%{
        display: none;
    }
    100% {
        display: none;
        
    }
}</style>