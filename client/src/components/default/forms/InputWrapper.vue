<template>
     <div class="py-2">
          <span class="px-1 text-sm text-gray-600" v-if="label">{{ label }}</span>
          <slot></slot>
     </div>
</template>

<script>
export default {
     name: 'InputWrapper',
     props: {
          label: {
               type: String,
               required: false,
          },
     },
};
</script>
