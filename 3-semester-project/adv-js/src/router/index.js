import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth:true }
    },  
    {
      path: '/actor',
      name: 'actor',
      component: () => import('../views/ActorView.vue')
    },
    {
      path: '/infinitescroll',
      name: 'infinitescroll',
      component: () => import('../views/InfiniteView.vue')
    },
    {
      path: '/infinitescroll3d',
      name: 'infinitescroll3d',
      component: () => import('../views/Infinite3dView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    const checkAuth = new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });

    checkAuth.then((user) => {
      if (user) {
        next();
      } else {
        next('/');
      }
    });
  } else {
    next();
  }
});

/* 
  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/');
      }
    });
  } else {
    next();
  }
}); */

export default router
