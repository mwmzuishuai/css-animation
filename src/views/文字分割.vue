<template>
    <div class="bigbox">
        <div class="box">
            <div class="dd box1">LOVE</div>
            <div class="dd box2">LOVE</div>
            <div class="dd box3">YOU</div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox{
    height: 100vh;
    background: pink;
    display: flex;
    .box{
        margin: auto;
        position: relative;
        width: 300px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        // overflow: hidden;
    }
    .dd{
        position: absolute;
        font-size: 200px;
        font-weight: bolder;
        color: #fff;
        transition: all 0.5s linear;
    }
    .box1{
        clip-path: inset(0 0 50% 0);
    }
    .box2{
        clip-path: inset(50% 0 0 0);
    }
    .box3{
        line-height: 80px;
        background: yellow;
        font-size: 60px;
        width: 490px;
        text-align: center;
        transform: scaleY(0);
        color: #2f3640;

    }
    .box:hover .box1{
        transform: translateY(-60px);
    }
    .box:hover .box2{
        transform: translateY(60px);
    }
    .box:hover .box3{
        transform: scaleY(1);
    }
}
</style>