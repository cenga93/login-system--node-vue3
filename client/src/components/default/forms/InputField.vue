<template>
     <input
          :maxlength="maxLength"
          :type="type"
          v-model="value"
          class="text-md block px-3 py-2 rounded-lg bg-white border-2 border-gray-300 placeholder-gray-600 focus:placeholder-gray-500 focus:bg-white focus:outline-none"
     />
</template>

<script>
import { ref } from 'vue';

export default {
     name: 'InputField',
     props: {
          type: {
               type: String,
               required: true,
          },
          maxLength: {
               type: String,
               required: false,
          },
     },
     setup() {
          const value = ref('');

          return {
               value,
          };
     },
};
</script>
