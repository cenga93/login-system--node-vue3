<template>
     <div class="input-errors">
          <small class="error-msg text-red-600">{{ error.$message }}</small>
     </div>
</template>

<script>
export default {
     name: 'InputErrors',
     props: ['error'],
};
</script>
