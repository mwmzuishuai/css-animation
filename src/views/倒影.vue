<template>
    <div class="bigbox">
        <div class="but"></div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox{
    height: 100vh;
    background: black;
    display: flex;
    .but{
        width: 300px;
        height: 200px;
        margin: auto;
        // border: 1px solid green;
        border-radius: 10px;
        position: relative;overflow: hidden;
        box-shadow: 0 0 20px #00a8ff;

    }
    .but::before{
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        background-color: aqua;
        top: 50%;
        left: 50%;
        animation: zhuan 1s linear infinite;
        transform-origin: top left;
    }
    .but::after{
        content: '';
        --w:2px;
        width: calc(100% - 2*var(--w));
        height: calc(100% - 2*var(--w));
        position: absolute;
        top: var(--w);
        left: var(--w);
        background: black;
        border-radius: 10px;
    }
    .but:hover{
        transform: translateY(-20px);
        -webkit-box-reflect:below 20px linear-gradient(transparent, rgba(0, 0, 0, 1)) ;
    }
}
@keyframes zhuan {
    to{
        transform: rotate(360deg);
    }
}
</style>