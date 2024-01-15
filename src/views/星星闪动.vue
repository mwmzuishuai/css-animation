<template>
    <div class="bigbox">
        <div class="box">
            <button>你抓不是</button>
        </div>
        <div class="box">
            <button>你抓不是</button>
        </div>
        <div class="box">
            <button>你抓不是</button>
        </div>
        <div class="box">
            <button>你抓不是</button>
        </div>
        <div class="box">
            <button>你抓不是</button>
        </div>
        <div class="box">
            <button>你抓不是</button>
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
    align-items: center;
    justify-content: center;
    .box{
        width: 200px;
        height: 100px;
        margin: 10px;
        position: relative;
        button{
            width: 200px;
            height: 100px;
            background: linear-gradient(to right,#17ead9,#6078ea,#17ead9);
            background-size: 200%;
            transition: 1s;
            border: none;
            border-radius: 5px;
        }
        button:hover{
            background-position-x:100% ;
            transform: translateY(-60px);
        }
    }
    .box::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background-color: #a4b0be;
        border-radius: 50%;
        left: 0;
        bottom: 0;
        z-index: -1;
        filter: blur(8px);
        transform: scale(0);
        transition: 1s;
    }
    .box:hover::after{
        transform: scale(1);
    }
}
</style>