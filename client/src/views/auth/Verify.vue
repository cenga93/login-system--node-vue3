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
                              <Alert v-if="showAlert" />
                              <div class="mx-auto max-w-lg text-center">
                                   <input-errors v-for="error of v$.num1.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num2.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num3.$errors" :error="error" :key="error.$uid" />
                                   <input-errors v-for="error of v$.num4.$errors" :error="error" :key="error.$uid" />
                                   <input-wrapper class="flex justify-center">
                                        <input-field
                                             type="text"
                                             class="w-12 text-center mr-2"
                                             v-model="data.num1"
                                             maxLength="1"
                                             @blur="v$.num1.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="w-12 text-center mr-2"
                                             v-model="data.num2"
                                             maxLength="1"
                                             @blur="v$.num2.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="w-12 text-center mr-2"
                                             v-model="data.num3"
                                             maxLength="1"
                                             @blur="v$.num3.$touch()"
                                        />
                                        <input-field
                                             type="text"
                                             class="w-12 text-center mr-2"
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
     <Loader v-if="loading" />
</template>

<script>
import InputWrapper from '@/components/default/forms/InputWrapper';
import InputField from '@/components/default/forms/InputField';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import verifyValidation from '@/validations/verifyValidation';
import InputErrors from '@/components/default/forms/InputErrors';
import { useStore } from 'vuex';
import Alert from '@/components/ui/Alert';
import Loader from '@/components/default/layout/Loader';
import { computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import router from '@/router';

export default {
     name: 'Verify',
     components: {
          InputWrapper,
          InputField,
          InputErrors,
          Alert,
          Loader,
     },
     setup() {
          const route = useRoute();
          const store = useStore();
          const id = route.params.id;
          const showAlert = computed(() => store.state.alert.show);
          const loading = ref(false);
          const data = ref({
               num1: '',
               num2: '',
               num3: '',
               num4: '',
          });

          const v$ = useVuelidate(verifyValidation, data);

          const handleSubmit = async () => {
               const formIsValid = await v$.value.$validate();

               if (formIsValid) {
                    const { num1, num2, num3, num4 } = data.value;
                    const code = `${num1}${num2}${num3}${num4}`;

                    loading.value = true;

                    await store.dispatch('hideAlert');

                    try {
                         const response = await axios.post(`/auth/verification/${id}`, { code });

                         if (response.status === 200) {
                              await router.push({ name: 'Login' });
                         }
                    } catch (err) {
                         await store.dispatch('showAlert', err.response.data.message);
                    }

                    loading.value = false;
               }
          };

          return {
               handleSubmit,
               loading,
               showAlert,
               data,
               v$,
          };
     },
};
</script>
