import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/UIlist.vue';
// import wyc from './views/wyc.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('./views/UIlist.vue')
    },
    {
      path: '/ps',
      name: '跑商',
      component: () => import('./views/AddressNavi.vue')
    },
    {
      path: '/wl',
      name: '跑商2',
      component: () => import('./views/UIlist1.vue')
    },
    {
      path: '/upgradeLog',
      name: '更新日志',
      component: () => import('./views/upgradeLog.vue')
    }
  ],
});