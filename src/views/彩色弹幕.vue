<template>
    <div class="bigbox">
        <div class="box" v-for="i in 3500">
        <div class="nei"></div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox{
    width: 100%;
    height: 100vh;
    background-color: #111;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    .box{
        width: 24px;
        height: 24px;
        // background-color: aqua;
        border: 1px solid #111;
        position: relative;
    }

    .nei{
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background-color: #333;     
        transition: 3s ease-in-out;
    }
}
.bigbox .box:nth-child(9n+1):hover .nei{
    background-color: red;
    transition: 0s ease-in-out;

}
.bigbox .box:nth-child(9n+2):hover .nei{
    transition: 0s ease-in-out;
    background-color: #2ecc71;
}
.bigbox .box:nth-child(9n+3):hover .nei{
    transition: 0s ease-in-out;
    background-color: #9b59b6;
}
.bigbox .box:nth-child(9n+4):hover .nei{
    transition: 0s ease-in-out;
    background-color: #ffa502;
}
.bigbox .box:nth-child(9n+5):hover .nei{
    transition: 0s ease-in-out;
    background-color: #00a8ff;
}
.bigbox .box:nth-child(9n+6):hover .nei{
    transition: 0s ease-in-out;
    background-color: #fc427b;
}
.bigbox .box:nth-child(9n+7):hover .nei{
    transition: 0s ease-in-out;
    background-color: #fed330;
}
.bigbox .box:nth-child(9n+8):hover .nei{
    transition: 0s ease-in-out;
    background-color: #ffb8b8;
}
.bigbox .box:nth-child(9n+9):hover .nei{
    transition: 0s ease-in-out;
    background-color: #40407a;
}
</style>