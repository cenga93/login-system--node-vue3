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
                                             <input-field type="text" v-model="data.firstname" />
                                        </input-wrapper>
                                        <input-wrapper label="Lastname">
                                             <input-field type="text" v-model="data.lastname" />
                                        </input-wrapper>
                                   </div>
                                   <input-wrapper label="Email">
                                        <input-field type="email" v-model="data.email" />
                                   </input-wrapper>
                                   <input-wrapper label="Password">
                                        <input-field type="password" v-model="data.password" />
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

                                   <Loader v-if="loader" />
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

export default {
     name: 'Register',
     components: {
          InputWrapper,
          InputField,
          Loader,
     },
     setup() {
          const loader = ref(false);

          const data = ref({
               firstname: '',
               lastname: '',
               email: '',
               password: '',
          });

          const handleSubmit = () => {
               console.log(data.value);
          };

          return {
               handleSubmit,
               data,
               loader,
          };
     },
};
</script>
