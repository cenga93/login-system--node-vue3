<template>
     <div class="container max-w-full mx-auto py-24 px-4">
          <div class="max-w-sm mx-auto">
               <div class="flex flex-wrap">
                    <div class="w-full">
                         <div class="text-center font-semibold text-black">
                              <h2 class="text-center text-3xl font-extrabold text-gray-900">Enter new password</h2>
                              <p></p>
                         </div>
                         <form class="mt-8" @submit.prevent="handleSubmit" novalidate>
                              <Alert v-if="showAlert" />
                              <div class="mx-auto max-w-lg">
                                   <input-wrapper label="Password">
                                        <input-field
                                             class="w-full"
                                             type="password"
                                             v-model="password"
                                             @blur="v$.password.$touch()"
                                             placeholder="Enter your new password"
                                        />
                                        <input-errors v-for="error of v$.password.$errors" :error="error" :key="error.$uid" />
                                   </input-wrapper>

                                   <input-wrapper label="Confirm password">
                                        <input-field
                                             class="w-full"
                                             type="password"
                                             v-model="confirm_password"
                                             @blur="v$.confirm_password.$touch()"
                                             placeholder="Confirm your new password"
                                        />
                                        <input-errors v-for="error of v$.confirm_password.$errors" :error="error" :key="error.$uid" />
                                   </input-wrapper>
                                   <button
                                        class="mt-3 text-lg font-semibold bg-indigo-700 w-full text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-indigo-900"
                                   >
                                        Reset password
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
import { ref } from 'vue';
import InputWrapper from '@/components/default/forms/InputWrapper';
import InputField from '@/components/default/forms/InputField';
import useVuelidate from '@vuelidate/core';
import InputErrors from '@/components/default/forms/InputErrors';
import axios from 'axios';
import { useStore } from 'vuex';
import { computed } from 'vue';
import Loader from '@/components/default/layout/Loader';
import Alert from '@/components/ui/Alert';
import { useRoute } from 'vue-router';
import enterPasswordValidation from '@/validations/enterPasswordValidation';
import router from '@/router';

export default {
     name: 'EnterPassword',
     components: { InputWrapper, InputField, InputErrors, Alert, Loader },
     setup() {
          const route = useRoute();
          const { token } = route.query;
          const showAlert = computed(() => store.state.alert.show);
          const store = useStore();

          const loading = ref(false);
          const password = ref('');
          const confirm_password = ref('');

          const v$ = useVuelidate(enterPasswordValidation({ password }), { password, confirm_password });

          const handleSubmit = async () => {
               if (!token) {
                    return await store.dispatch('showAlert', 'Enter valid URL');
               }

               const formIsValid = await v$.value.$validate();
               if (formIsValid) {
                    loading.value = true;
                    await store.dispatch('hideAlert');

                    try {
                         await axios.post(`/auth/enter-password?token=${token}`, { password: password.value }).then(() => {
                              router.push({ name: 'Login' });
                         });
                    } catch (err) {
                         await store.dispatch('showAlert', err.response.data.message);
                         loading.value = false;
                    }
               }
          };

          return {
               handleSubmit,
               showAlert,
               loading,
               password,
               confirm_password,
               v$,
          };
     },
};
</script>

<style scoped></style>
