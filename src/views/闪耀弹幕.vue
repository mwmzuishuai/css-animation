<template>
    <div class="bigbox">
        <div class="box" v-for="i in 3500">
        <div class="nei" :style="{animationDuration:`${Math.random()*4+1}s`}" ></div>
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
    justify-content: space-between;
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
    animation: shan linear infinite;
    }
}
.bigbox .box:nth-child(9n+1) .nei{
    background-color: red;
    transition: 0s ease-in-out;

}
.bigbox .box:nth-child(9n+2) .nei{
    transition: 0s ease-in-out;
    background-color: #2ecc71;
    // animation: shan 1s linear infinite;
}
.bigbox .box:nth-child(9n+3) .nei{
    transition: 0s ease-in-out;
    background-color: #9b59b6;
    // animation: shan 5s linear infinite;
}
.bigbox .box:nth-child(9n+4) .nei{
    transition: 0s ease-in-out;
    background-color: #ffa502;
    // animation: shan 0.5s linear infinite;

}
.bigbox .box:nth-child(9n+5) .nei{
    transition: 0s ease-in-out;
    background-color: #00a8ff;
    // animation: shan 4s linear infinite;
}
.bigbox .box:nth-child(9n+6) .nei{
    transition: 0s ease-in-out;
    background-color: #fc427b;
    // animation: shan 6s linear infinite;

}
.bigbox .box:nth-child(9n+7) .nei{
    transition: 0s ease-in-out;
    background-color: #fed330;
    // animation: shan 2s linear infinite;

}
.bigbox .box:nth-child(9n+8) .nei{
    transition: 0s ease-in-out;
    background-color: #ffb8b8;
    // animation: shan 8s linear infinite;
}
.bigbox .box:nth-child(9n+9) .nei{
    transition: 0s ease-in-out;
    background-color: #40407a;
    // animation: shan 1s linear infinite;
}
@keyframes shan {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>