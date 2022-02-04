import store from '@/store';
import router from '@/router';

export default ({ meta, path, params }, from, next) => {
     if (meta.auth) {
          if (!store.getters.authenticated) {
               router.push({ path: '/login' }).catch(() => {});
          } else {
               next();
          }
     } else {
          if (store.getters.authenticated) {
               router.push({ name: 'Home' });
          } else {
               const verificationPage = path.includes('verification');

               if (verificationPage) {
                    if (params.id && params.id.length === 2) {
                         return next();
                    } else {
                         router.push({ name: 'Login' });
                    }
               } else {
                    next();
               }
          }
     }
};
