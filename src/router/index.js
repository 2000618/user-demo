import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



export default  new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/table'
        },
        {
            path:'/table',
            component:()=>import('@/view/Home.vue')
          },
        {
            path:'/test',
            component:()=>import('@/components/continue.vue')
        }
    ]
})