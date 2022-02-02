import axios from 'axios';
import store from '@/store';
import { URL } from '@/config';

axios.defaults.baseURL = URL.DEFAULT_BACKEND;

store.subscribe((mutation) => {
     const { type, payload } = mutation;

     switch (type) {
          case 'SET_TOKEN':
               if (payload) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
                    localStorage.setItem('auth', payload);
               } else {
                    axios.defaults.headers.common['Authorization'] = null;
                    localStorage.removeItem('auth');
               }

               break;
     }
});
