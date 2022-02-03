import axios from 'axios';
import MT from './types';
import router from '@/router';

const login = async ({ commit, dispatch }, payload) => {
     try {
          const response = await axios.post('/auth/login', payload);
          await dispatch('setUser', response.data.access.token);
          await router.push({ name: 'Home' });
     } catch (err) {
          commit(MT.SHOW_ALERT, err.response.data.message);
     }
};

const register = async ({ commit }, payload) => {
     try {
          const response = await axios.post('/auth/register', payload);

          if (response.status === 200) {
               await router.push({ path: `/verification/${response.data._id}` });
          }
     } catch (err) {
          commit(MT.SHOW_ALERT, err.response.data.message);
     }
};

const setUser = async ({ commit }, token) => {
     if (token) {
          commit(MT.SET_TOKEN, token);

          try {
               const user = await axios.get('/auth/me');

               commit(MT.SET_USER, user);
          } catch (e) {
               commit(MT.SET_TOKEN, null);
               commit(MT.SET_USER, null);
          }
     }
};

const showAlert = ({ commit }, payload) => {
     commit(MT.SHOW_ALERT, payload);
};

const hideAlert = ({ commit }) => {
     commit(MT.HIDE_ALERT);
};

export default {
     login,
     register,
     setUser,
     showAlert,
     hideAlert,
};
