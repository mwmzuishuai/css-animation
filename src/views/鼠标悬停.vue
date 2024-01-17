<template>
    <div class="bigbox">
        <div class="box" @mouseenter="ru" @mouseleave="chu">
            <div class="nei">
                <div class="text" :class="{ru:key,chu:!key}">
                    <div :class="{textru:key,textchu:!key}" style="color: aliceblue;">111111111</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const key = ref(false)
const ru = () => {
    key.value = true
}
const chu = () => {
    key.value = false
}
</script>
<style scoped lang='scss'>
.bigbox {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
        width: 500px;
        height: 400px;
        border: 1px solid gold;
        display: flex;
        align-items: center;

        .nei {
            width: 500px;
            height: 300px;
            margin-left: -60px;
            overflow: hidden;

            .text {
                background-color: black;
                width: 100%;
                height: 100%;
                transform: translateX(-100%);

            }

            .ru {
                animation: ruchang 0.5s linear forwards;
            }

            .chu {
                animation: chuchang 0.5s linear forwards;
            }
            .textru{
                animation: textru1 0.5s linear forwards;
                opacity: 0;
                animation-delay:0.5s;
            }
            .textchu{
                opacity: 0;
            }
        }
    }
}

@keyframes ruchang {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes chuchang {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}
@keyframes textru1 {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>