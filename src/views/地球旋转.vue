<template>
    <div class="bigbox">
        <div class="box">
            <div class="box1 "></div>
            <div class="box2"></div>
            <div class="box3"></div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox {
    height: 100vh;
    display: flex;
    background: black;
    overflow: hidden;

    .box {
        width: 30vw;
        height: 30vw;
        margin: auto;
        // background-color: aqua;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .box1 {
            width: 80%;
            height: 80%;
            position: absolute;
            background: url('../assets/qiu.png');
            background-size: cover;    
            opacity: .6;  
        }
        .box2{
            width: 100%;
            height: 100%;
            position: absolute;
            background: url('../assets/wang.png');
            background-size: cover;
            animation: zhan 8s linear infinite;
            opacity: .6;
        }
        .box3{
            width: 86%;
            height: 86%;
            position: absolute;
            background: url('../assets/tou.png');
            background-size: cover;
            animation: zhan1 11s linear infinite;
            // opacity: 1;
        }
    }

}
@keyframes zhan {
    to{
        transform: rotate(360deg);
    }
}
@keyframes zhan1 {
    to{
        transform: rotate(-360deg);
    }
}
</style>