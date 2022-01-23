import { email, helpers, required } from '@vuelidate/validators';

export default {
     email: {
          required: helpers.withMessage('Email is required', required),
          email,
     },
};
