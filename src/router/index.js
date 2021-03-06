import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/covfefe/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
