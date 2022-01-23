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
                                        <input-field type="email" v-model="data.email" @blur="v$.email.$touch()" />
                                        <input-errors v-for="error of v$.email.$errors" :error="error" :key="error.$uid" />
                                   </input-wrapper>

                                   <input-wrapper label="Password">
                                        <input-field type="password" v-model="data.password" @blur="v$.password.$touch()" />
                                        <input-errors v-for="error of v$.password.$errors" :error="error" :key="error.$uid" />
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

                         <Loader v-if="data.loading" />
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { ref } from 'vue';
import InputWrapper from '@/components/default/forms/InputWrapper';
import InputField from '@/components/default/forms/InputField';
import InputErrors from '@/components/default/forms/InputErrors';
import useVuelidate from '@vuelidate/core';
import registerValidation from '@/validations/registerValidation';
import Loader from '@/components/default/layout/Loader';

export default {
     name: 'Login',
     components: {
          InputWrapper,
          InputField,
          InputErrors,
          Loader,
     },
     setup() {
          const data = ref({
               email: '',
               password: '',
               loading: false,
          });

          const handleSubmit = async () => {
               const result = await v$.value.$validate();

               if (!result) {
                    console.log('ima errore');
               } else {
                    console.log('nema error-e..moze da se submit...');
               }
          };

          const v$ = useVuelidate(registerValidation, data);

          return {
               handleSubmit,
               data,
               v$,
          };
     },
};
</script>
