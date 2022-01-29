import router from '@/router';

export default (to, from, next) => {
     const { authenticated } = to.meta;

     if (authenticated && localStorage.getItem('auth')) {
          return next();
     } else if (!authenticated) {
          return next();
     } else {
          router.push('/login');
     }
};
