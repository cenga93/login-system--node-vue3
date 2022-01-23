import { email, helpers, minLength, required } from '@vuelidate/validators';

export default {
     email: {
          required: helpers.withMessage('Email is required', required),
          email,
     },
     password: {
          required: helpers.withMessage('Password is required', required),
          minLength: minLength(6),
     },
};
