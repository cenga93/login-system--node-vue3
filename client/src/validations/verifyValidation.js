import { helpers, required } from '@vuelidate/validators';

export default {
     num1: {
          required: helpers.withMessage('Number 1 is required', required),
     },
     num2: {
          required: helpers.withMessage('Number 2 is required', required),
     },
     num3: {
          required: helpers.withMessage('Number 3 is required', required),
     },
     num4: {
          required: helpers.withMessage('Number 4 is required', required),
     },
};
