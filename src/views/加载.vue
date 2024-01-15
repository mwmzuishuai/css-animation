<template>
    <div>
        <h1 class="te_h1">Loging...</h1>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.te_h1{
    font-size: 120px;
    letter-spacing: 20px;
    // // font-weight: bolder;
    // color: transparent;
    width: 800px;
    position: relative;padding-bottom: 20px;
    border-bottom: 10px solid black;
}
.te_h1::after{
    content: 'Loging...';
    position: absolute;
    top: 0;
    left: 0;
    color: darkgoldenrod;
    overflow: hidden;
    padding-bottom: 20px;
    border-bottom: 10px solid darkgoldenrod;
    animation: dong 4s linear infinite;

}
@keyframes dong {
    0%{
        width: 0;
    }
    100%{
        width: 100%;
    }
}
</style>