<template>
    <div class="bigbox">
        <div class="box">
            <div class="quan quan1"></div>
            <div class="quan quan2"></div>
            <div class="quan quan3"></div>
            <div class="quan quan4"></div>
            <div class="quan quan5"></div>
            <div class="quan quan6"></div>
            <div class="quan quan7"></div>
            <div class="quan quan8"></div>
            <div class="quan quan9"></div>
            <div class="quan quan10"></div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox{
    height:100vh;
    background-color: black;
    overflow: hidden;
    display: flex;
    .box{
        width: 500px;
        height: 500px;
        // background: red;
        margin: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .quan{
            border-radius: 50%;
            // border: 1px solid white;
            background-color: #44bd32;
            animation: fangda 4s linear infinite;
            position: absolute;

        }
        .quan1{
            animation-delay: 0s;
        }
        .quan2{
            animation-delay: 0.4s;
        }
        .quan3{
            animation-delay: 0.8s;
        }
        .quan4{
            animation-delay: 1.2s;
        }
        .quan5{
            animation-delay: 1.6s;
        }
        .quan6{
            animation-delay: 2s;
        }
        .quan7{
            animation-delay: 2.4s;
        }
        .quan8{
            animation-delay: 2.8s;
        }
        .quan9{
            animation-delay: 3.2s;
        }
        .quan10{
            animation-delay: 3.6s;
        }
    }
}
@keyframes fangda {
    0%{
        width: 0;
        height: 0;
        opacity: 1;
    }
    100%{
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style>