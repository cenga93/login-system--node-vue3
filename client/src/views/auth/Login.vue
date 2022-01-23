<template>
     <div class="container max-w-full mx-auto py-24 px-4">
          <div class="max-w-sm mx-auto">
               <div class="flex flex-wrap">
                    <div class="w-full">
                         <div class="text-center font-semibold text-black">
                              <h2 class="text-center text-3xl font-extrabold text-gray-900">Welcome back</h2>
                              <p>Sign in to your account</p>
                         </div>
                         <form class="mt-8" @submit.prevent="handleSubmit" novalidate>
                              <div class="mx-auto max-w-lg">
                                   <input-wrapper label="Email">
                                        <input-field type="email" v-model="data.email" />
                                   </input-wrapper>
                                   <input-wrapper label="Password">
                                        <input-field type="password" v-model="data.password" />
                                   </input-wrapper>
                                   <button
                                        class="mt-3 text-lg font-semibold bg-indigo-700 w-full text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-indigo-900"
                                   >
                                        Login
                                   </button>
                                   <div class="flex justify-between">
                                        <label class="block text-gray-500 font-bold my-4">
                                             <router-link
                                                  to="/register"
                                                  class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-600"
                                             >
                                                  <span>Sign up here</span>
                                             </router-link>
                                        </label>

                                        <label class="block text-gray-500 font-bold my-4">
                                             <router-link
                                                  to="/forgot-password"
                                                  class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-600"
                                             >
                                                  <span>Forgot password?</span>
                                             </router-link>
                                        </label>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { ref } from 'vue';
import InputWrapper from '@/components/default/forms/InputWrapper';
import InputField from '@/components/default/forms/InputField';

export default {
     name: 'Login',
     components: {
          InputWrapper,
          InputField,
     },
     setup() {
          const data = ref({
               email: '',
               password: '',
          });

          const handleSubmit = () => {
               console.log(data.value.email);
               console.log(data.value.password);
          };

          return {
               data,
               handleSubmit,
          };
     },
};
</script>
