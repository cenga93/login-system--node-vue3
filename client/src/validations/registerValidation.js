import { email, helpers, minLength, required } from '@vuelidate/validators';

export default {
     firstname: {
          required: helpers.withMessage('Firstname is required', required),
          minLength: minLength(2),
     },
     lastname: {
          required: helpers.withMessage('Lastname is required', required),
          minLength: minLength(2),
     },
     email: {
          required: helpers.withMessage('Email is required', required),
          email,
     },
     password: {
          required: helpers.withMessage('Password is required', required),
          minLength: minLength(6),
     },
};
