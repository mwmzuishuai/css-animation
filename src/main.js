import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router/index'
import 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(Antd).use(router).use(ElementPlus).mount('#app')
