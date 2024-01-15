<template>
    <div class="bigbox">
        <div class="box">
            <span class="text text1">你是不是傻啊！笨蛋</span>
            <span class="text text2">你是不是傻啊！笨蛋</span>
            <span class="text text3">你是不是傻啊！笨蛋</span>
            <span class="text text4">你是不是傻啊！笨蛋</span>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox {
    width: 100vw;
    height: 100vh;
    background-color: #222222;
    display: flex;
    overflow: hidden;

    .box {
        width: 900px;
        height: 900px;
        margin: auto;
        position: relative;
        // display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        .text {
            position: absolute;
            font-size: 100px;
            color: white;
            text-align: center;
            font-weight: bold;
            overflow: hidden;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-wrap: nowrap;
            border-radius: 50%;
            box-shadow:inset  0 0 60px black;
            background-color: #222222;

        }

        .text1 {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            animation-delay: 0s;
            z-index: 1;
        }

        .text2 {
            top: 150px;
            left: 150px;
            right: 150px;
            bottom: 150px;
            animation-delay: 0.2s;
            z-index: 2;

        }

        .text3 {
            top: 300px;
            left: 300px;
            right: 300px;
            bottom: 300px;
            animation-delay: 0.4s;
            z-index: 3;
            
        }

        .text4 {
            top: 400px;
            left: 400px;
            right: 400px;
            bottom: 400px;
            animation-delay: 0.6s;
            z-index: 4;
        }
    }

    .box:hover .text1 {
        animation: zhuan 5s cubic-bezier(.64, -0.56, .36, 1.56);
        animation-delay: 0s;
        

    }
    .box:hover .text2 {
        animation: zhuan 5s cubic-bezier(.64, -0.56, .36, 1.56);
        animation-delay: 0.2s;

    }
    .box:hover .text3 {
        animation: zhuan 5s cubic-bezier(.64, -0.56, .36, 1.56);
        animation-delay: 0.4s;
    }
    .box:hover .text4 {
        animation: zhuan 5s cubic-bezier(.64, -0.56, .36, 1.56);
        animation-delay: 0.6s;
    }
}

@keyframes zhuan {
    0% {
        transform: rotate(0deg);
    }

    80%,
    100% {
        transform: rotate(360deg);
    }
}</style>