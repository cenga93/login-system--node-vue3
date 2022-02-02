const getUser = (state) => {
     return state.user;
};

const authenticated = (state) => {
     return state.token && state.user;
};

export default {
     getUser,
     authenticated,
};
