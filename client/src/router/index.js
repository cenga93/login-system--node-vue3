import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AuthMiddleware from './middleware/auth';

const routes = [
     {
          path: '/',
          name: 'Home',
          component: Home,
          meta: {
               authenticated: true,
          },
     },
     {
          path: '/login',
          name: 'Login',
          component: () => import('../views/Login.vue'),
          meta: {
               authenticated: false,
          },
          beforeEnter: (to, from) => {
               if (sessionStorage.getItem('auth')) {
                    router.push(from.path);
               }
          },
     },
     {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound'),
          meta: {
               authenticated: true,
          },
     },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

router.beforeEach(AuthMiddleware);

export default router;
