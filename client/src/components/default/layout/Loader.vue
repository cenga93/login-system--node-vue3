<template>
     <div
          class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black opacity-50 flex flex-col items-center justify-center"
     >
          <div class="flex justify-center items-center">
               <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'Loader',
};
</script>
