<template>
     <div class="container max-w-full mx-auto py-24 px-4">
          <div class="max-w-sm mx-auto">
               <div class="flex flex-wrap">
                    <div class="w-full">
                         <div class="text-center font-semibold text-black">
                              <h2 class="text-center text-3xl font-extrabold text-gray-900">Check your email</h2>
                              <p>Verify your email address</p>
                         </div>
                         <form class="mt-8" @submit.prevent="handleSubmit" novalidate>
                              <div class="mx-auto max-w-lg text-center">
                                   <input-errors v-for="error of v$.num1.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num2.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num3.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num4.$errors" :error="error" :key="error.$uid" />
                                   <input-wrapper class="flex justify-center sm:mx-12">
                                        <input-field
                                             type="text"
                                             class="mr-5 text-center"
                                             v-model="data.num1"
                                             maxLength="1"
                                             @blur="v$.num1.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="mr-5 text-center"
                                             v-model="data.num2"
                                             maxLength="1"
                                             @blur="v$.num2.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="mr-5 text-center"
                                             v-model="data.num3"
                                             maxLength="1"
                                             @blur="v$.num3.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="text-center"
                                             v-model="data.num4"
                                             maxLength="1"
                                             @blur="v$.num4.$touch()"
                                        />
                                   </input-wrapper>
                                   <button
                                        class="mt-3 text-lg font-semibold bg-indigo-700 w-full text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-indigo-900"
                                   >
                                        <span>Verify</span>
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
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import InputWrapper from '@/components/default/forms/InputWrapper';
import InputField from '@/components/default/forms/InputField';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import verifyValidation from '@/validations/verifyValidation';
import InputErrors from '@/components/default/forms/InputErrors';

export default {
     name: 'Verify',
     components: {
          InputWrapper,
          InputField,
          InputErrors,
     },
     setup() {
          const data = ref({
               num1: '',
               num2: '',
               num3: '',
               num4: '',
          });

          const v$ = useVuelidate(verifyValidation, data);

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

<style scoped></style>
