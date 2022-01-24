<template>
     <div class="container max-w-full mx-auto py-24 px-4">
          <div class="max-w-sm mx-auto">
               <div class="flex flex-wrap">
                    <div class="w-full">
                         <div class="text-center font-semibold text-black">
                              <h2 class="text-center text-3xl font-extrabold text-gray-900">Register</h2>
                              <p>Create your account</p>
                         </div>
                         <form class="mt-8" @submit.prevent="handleSubmit" novalidate>
                              <div class="mx-auto max-w-lg">
                                   <div class="block sm:flex">
                                        <input-wrapper label="Firstname" class="sm:mr-2">
                                             <input-field
                                                  class="w-full"
                                                  type="text"
                                                  v-model="data.firstname"
                                                  @blur="v$.firstname.$touch()"
                                                  placeholder="Firstname"
                                             />
                                             <input-errors v-for="error of v$.firstname.$errors" :error="error" :key="error.$uid" />
                                        </input-wrapper>
                                        <input-wrapper label="Lastname">
                                             <input-field
                                                  class="w-full"
                                                  type="text"
                                                  v-model="data.lastname"
                                                  @blur="v$.lastname.$touch()"
                                                  placeholder="Lastname"
                                             />
                                             <input-errors v-for="error of v$.lastname.$errors" :error="error" :key="error.$uid" />
                                        </input-wrapper>
                                   </div>
                                   <input-wrapper label="Email">
                                        <input-field
                                             class="w-full"
                                             type="email"
                                             v-model="data.email"
                                             @blur="v$.email.$touch()"
                                             placeholder="Email address"
                                        />
                                        <input-errors v-for="error of v$.email.$errors" :error="error" :key="error.$uid" />
                                   </input-wrapper>
                                   <input-wrapper label="Password">
                                        <input-field
                                             class="w-full"
                                             type="password"
                                             v-model="data.password"
                                             @blur="v$.password.$touch()"
                                             placeholder="Your password"
                                        />
                                        <input-errors v-for="error of v$.password.$errors" :error="error" :key="error.$uid" />
                                   </input-wrapper>
                                   <button
                                        class="mt-3 text-lg font-semibold bg-indigo-700 w-full text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-indigo-900"
                                   >
                                        Sign Up
                                   </button>
                                   <div class="flex justify-end">
                                        <label class="block text-gray-500 font-bold my-4">
                                             <router-link
                                                  to="/login"
                                                  class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-600"
                                             >
                                                  <span>Back to login</span>
                                             </router-link>
                                        </label>
                                   </div>
                                   <Loader v-if="data.loading" />
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
import Loader from '@/components/default/layout/Loader';
import useVuelidate from '@vuelidate/core';
import registerValidation from '@/validations/registerValidation';
import InputErrors from '@/components/default/forms/InputErrors';

export default {
     name: 'Register',
     components: {
          InputErrors,
          InputWrapper,
          InputField,
          Loader,
     },
     setup() {
          const data = ref({
               firstname: '',
               lastname: '',
               email: '',
               password: '',
               loading: false,
          });

          const v$ = useVuelidate(registerValidation, data);

          const handleSubmit = async () => {
               const result = await v$.value.$validate();

               if (!result) {
                    console.log('ima errore');
               } else {
                    console.log('nema error-e..moze da se submit...');
               }
          };

          return {
               handleSubmit,
               data,
               v$,
          };
     },
};
</script>
