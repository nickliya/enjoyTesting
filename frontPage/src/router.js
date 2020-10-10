import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/UIlist.vue';
// import wyc from './views/wyc.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('./views/home.vue')
    },
    {
      path: '/dh',
      name: '导航',
      component: () => import('./views/AddressNavi.vue')
    },
    {
      path: '/data',
      name: '数据',
      component: () => import('./views/data.vue')
    },
    {
      path: '/upgradeLog',
      name: '更新日志',
      component: () => import('./views/upgradeLog.vue')
    }
  ],
});