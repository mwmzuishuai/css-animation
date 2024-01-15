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
    width: 800px;
    position: relative;padding-bottom: 20px;
    background: linear-gradient(to right,red 50% ,black 50%) text;
    background-size: 200% 100%;
    background-position: 100%;
    color: transparent;
    animation: dong 4s linear infinite;

}
@keyframes dong {
    0%{
        background-position-x:100%;
    }
    100%{
        background-position-x:0;
    }
}
</style>