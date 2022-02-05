import { minLength, helpers, required, sameAs } from '@vuelidate/validators';

export default ({ password }) => ({
     password: {
          required: helpers.withMessage('Password is required', required),
          minLength: minLength(6),
     },
     confirm_password: {
          required: helpers.withMessage('Confirm password is required', required),
          minLength: minLength(6),
          sameAs: sameAs(password),
     },
});
