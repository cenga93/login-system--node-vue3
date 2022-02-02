import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import authMiddleware from './middleware/auth';

const routes = [
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
          component: () => import('../views/auth/ForgotPassword'),
     },
     {
          path: '/verification/:id',
          name: 'Verify',
          component: () => import('../views/auth/Verify'),
     },
     {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound'),
     },
     {
          path: '/',
          name: 'Home',
          component: Home,
          beforeEnter: authMiddleware,
     },
];

const router = createRouter({
     history: createWebHistory(),
     routes,
});

export default router;
