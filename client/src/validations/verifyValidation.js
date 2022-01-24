import { helpers, required, maxLength, numeric } from '@vuelidate/validators';

export default {
     num1: {
          required: helpers.withMessage('Number 1 is required', required),
          maxLength: maxLength(1),
          numeric,
     },
     num2: {
          required: helpers.withMessage('Number 2 is required', required),
          maxLength: maxLength(1),
          numeric,
     },
     num3: {
          required: helpers.withMessage('Number 3 is required', required),
          maxLength: maxLength(1),
          numeric,
     },
     num4: {
          required: helpers.withMessage('Number 4 is required', required),
          maxLength: maxLength(1),
          numeric,
     },
};
