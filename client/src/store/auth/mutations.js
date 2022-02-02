import MT from './types';

const setUser = (state, user) => {
     state.user = user;
};

const setToken = (state, token) => {
     state.token = token;
};

const showAlert = (state, message) => {
     state.alert.show = true;
     state.alert.message = message;
};

const hideAlert = (state) => {
     state.alert.show = false;
     state.alert.message = '';
};

export default {
     [MT.SET_USER]: setUser,
     [MT.SET_TOKEN]: setToken,
     [MT.SHOW_ALERT]: showAlert,
     [MT.HIDE_ALERT]: hideAlert,
};
