// router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [{
      path: '/',
      name: 'index',
      component: () => import('../view/index.vue')
    }]
})
export default router;


// 自动导入公共组件
