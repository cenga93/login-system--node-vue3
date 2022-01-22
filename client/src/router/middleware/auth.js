import router from '@/router';

export default (to, from, next) => {
     const { authenticated } = to.meta;

     if (authenticated && sessionStorage.getItem('auth')) {
          return next();
     } else if (!authenticated) {
          return next();
     } else {
          router.push('/login');
     }
};
