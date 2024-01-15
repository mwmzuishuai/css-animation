<template>
    <div class="bigbox">
        <div class="box">
            <button>xiximi</button>
        </div>
        <div class="box">
            <button>xiximi</button>
        </div>
        <div class="box">
            <button>xiximi</button>
        </div>
        <div class="box">
            <button>xiximi</button>
        </div>
        <div class="box">
            <button>xiximi</button>
        </div>
        <div class="box">
            <button>xiximi</button>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.bigbox{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 200px;
        height: 100px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(to right,#fff6b7,#f6416c,#fff6b7);
        background-size: 200%;
        transition: 0.5s;
        
    }
    button:hover{
        background-position-x:100% ;
        transform: translateY(-60px);
    }
    .box{
        position: relative;
        margin: 10px;
    }
    .box::after{
        content: '';
        position: absolute;
        width: 200px;
        height: 10px;
        background-color: #a4b0be;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        // opacity: 0;
        transition: 1s;
        transform: scale(0);
        z-index: -1;
        filter: blur(5px);
    }
    .box:hover::after{
        // opacity: 1;
        transform: scale(1);
    }
}
</style>