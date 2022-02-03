import store from '@/store';
import router from '@/router';

export default async (to, from, next) => {
     if (!store.getters.authenticated) {
          await router.push('login').catch(() => {});
     } else {
          next();
     }

     // if (!store.getters.authenticated) {
     //      return next({ name: 'Login' });
     // } else {
     //      return next();
     // }
     // if(store.getters.getUser)

     // const token = localStorage.getItem('auth');
     //
     // console.log(token);

     // if (token) {
     //      const response = await axios.get('/api/auth/me');
     //
     //      if (response) {
     //           return next();
     //      } else {
     //           localStorage.clear();
     //           router.push('/login').catch(() => {});
     //      }
     // }
     //
     // if (authenticated) {
     //      router.push('/login').catch(() => {});
     // } else {
     //      return next();
     // }
};
