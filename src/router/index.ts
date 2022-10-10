import {
    createRouter,
    createWebHashHistory,
    createMemoryHistory,
    RouteRecordRaw
  } from 'vue-router';
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
       component: () => import('../views/404.vue')
    }
   
  ];
  
  const router = createRouter({
    history: createWebHashHistory(), //createMemoryHistory(),
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 };
    },
  
    routes
  });
  
  export default router;
  