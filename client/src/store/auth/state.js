const createState = () => ({
     user: null,
     token: '',
     alert: {
          show: false,
          message: '',
     },
});

export default { ...createState() };
