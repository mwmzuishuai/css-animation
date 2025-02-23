const routes = [
    {
        path:'',
        redirect:'/jiazai'
    },
    {
        path:'/jiazai',
        component:() =>import('../views/加载1.vue')
    },
    {
        path:'/caisedanmu',
        component:() =>import('../views/彩色弹幕.vue')
    },
    {
        path:'/daoying',
        component:() =>import('../views/倒影.vue')
    },
    {
        path:'/diqiuxuanzhuan',
        component:() =>import('../views/地球旋转.vue')
    },
    {
        path:'/jianbianxuanting',
        component:() =>import('../views/渐变按钮悬停效果.vue')
    },
    {
        path:'/lianyi',
        component:() =>import('../views/涟漪效果1.vue')
    },
    {
        path:'/shanyao',
        component:() =>import('../views/闪耀弹幕.vue')
    },
    {
        path:'/shubiaoxuanting',
        component:() =>import('../views/鼠标悬停.vue')
    },
    {
        path:'/shubiaoyidong',
        component:() =>import('../views/鼠标移动.vue')
    },
    {
        path:'/wanhuatong',
        component:() =>import('../views/万花筒.vue')
    },
    {
        path:'/wenzifenge',
        component:() =>import('../views/文字分割.vue')
    },
    {
        path:'/xingxing',
        component:() =>import('../views/星星闪动.vue')
    },
    {
        path:'/youling',
        component:() =>import('../views/幽灵特效.vue')
    },
    {
        path:'/faguangtexiao',
        component:() =>import('../views/发光特效.vue')
    },
    {
        path:'/donghuatexiao',
        component:() =>import('../views/css动画特效.vue')
    },
    {
        path:'/fen',
        component:() =>import('../views/svgtiao.vue')
    }

]
export default routes