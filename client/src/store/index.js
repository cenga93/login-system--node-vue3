import { createStore } from 'vuex';

export default createStore({
     state: {
          alert: {
               show: false,
               message: '',
          },
     },
     mutations: {
          showAlert(state, message) {
               state.alert.show = true;
               state.alert.message = message;
          },
          hideAlert(state) {
               state.alert.show = false;
               state.alert.message = '';
          },
     },
     actions: {
          showAlert({ commit }, payload) {
               commit('showAlert', {
                    message: payload,
               });
          },
          hideAlert({ commit }) {
               commit('hideAlert');
          },
     },
     modules: {},
});
