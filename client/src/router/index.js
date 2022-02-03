import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import authMiddleware from './middleware/auth';

const routes = [
     {
          path: '/',
          name: 'Home',
          component: Home,
          beforeEnter: authMiddleware,
          meta: {
               auth: true,
          },
     },
     {
          path: '/login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue'),
          meta: {
               auth: false,
          },
     },
     {
          path: '/register',
          name: 'Register',
          component: () => import('../views/auth/Register.vue'),
          meta: {
               auth: false,
          },
     },
     {
          path: '/forgot-password',
          name: 'ForgotPassword',
          component: () => import('../views/auth/ForgotPassword.vue'),
          meta: {
               auth: false,
          },
     },
     {
          path: '/verification/:id',
          name: 'Verify',
          component: () => import('../views/auth/Verify.vue'),
          meta: {
               auth: false,
          },
     },
     {
          // OVDE SAM...
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound.vue'),
     },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

router.beforeEach(authMiddleware);

export default router;
