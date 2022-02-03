import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import authMiddleware from './middleware/auth';

const routes = [
     {
          path: '/',
          name: 'Home',
          component: Home,
          beforeEnter: authMiddleware,
     },
     {
          path: '/login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue'),
     },
     {
          path: '/register',
          name: 'Register',
          component: () => import('../views/auth/Register.vue'),
     },
     {
          path: '/forgot-password',
          name: 'ForgotPassword',
          component: () => import('../views/auth/ForgotPassword.vue'),
     },
     {
          path: '/verification/:id',
          name: 'Verify',
          component: () => import('../views/auth/Verify.vue'),
     },

     {
          path: '/:catchAll(.*)',
          component: () => import('../views/NotFound.vue'),
     },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default router;
