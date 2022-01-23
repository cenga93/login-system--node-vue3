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
                                             <input-field type="text" v-model="data.firstname" @blur="v$.firstname.$touch()" />
                                             <div class="input-errors" v-for="error of v$.firstname.$errors" :key="error.$uid">
                                                  <small class="error-msg text-red-600">{{ error.$message }}</small>
                                             </div>
                                        </input-wrapper>
                                        <input-wrapper label="Lastname">
                                             <input-field type="text" v-model="data.lastname" @blur="v$.lastname.$touch()" />

                                             <div class="input-errors" v-for="error of v$.lastname.$errors" :key="error.$uid">
                                                  <small class="error-msg text-red-600">{{ error.$message }}</small>
                                             </div>
                                        </input-wrapper>
                                   </div>
                                   <input-wrapper label="Email">
                                        <input-field type="email" v-model="data.email" @blur="v$.email.$touch()" />
                                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                             <small class="error-msg text-red-600">{{ error.$message }}</small>
                                        </div>
                                   </input-wrapper>
                                   <input-wrapper label="Password">
                                        <input-field type="password" v-model="data.password" @blur="v$.password.$touch()" />

                                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                                             <small class="error-msg text-red-600">{{ error.$message }}</small>
                                        </div>
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
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, minLength } from '@vuelidate/validators';

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

          const rules = {
               firstname: {
                    required: helpers.withMessage('Firstname is required', required),
                    minLength: minLength(2),
               },
               lastname: {
                    required: helpers.withMessage('Lastname is required', required),
                    minLength: minLength(2),
               },
               email: {
                    required: helpers.withMessage('Email is required', required),
                    email,
               },
               password: {
                    required: helpers.withMessage('Password is required', required),
                    minLength: minLength(6),
               },
          };

          const v$ = useVuelidate(rules, data);

          const handleSubmit = async () => {
               const result = await v$.value.$validate();
               if (!result) {
                    console.log('ima errore');
               } else {
                    console.log('nema error-e..moze da se submit...');
               }
          };

          let x = [
               {
                    $dirty: true,
                    $path: '__root',
                    $model: null,
                    $error: true,
                    $errors: [
                         {
                              $propertyPath: 'lastname',
                              $property: 'lastname',
                              $validator: 'required',
                              $uid: 'lastname-required',
                              $message: 'Lastname is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                         {
                              $propertyPath: 'email',
                              $property: 'email',
                              $validator: 'required',
                              $uid: 'email-required',
                              $message: 'Email is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                         {
                              $propertyPath: 'password',
                              $property: 'password',
                              $validator: 'required',
                              $uid: 'password-required',
                              $message: 'Password is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                    ],
                    $invalid: true,
                    $anyDirty: true,
                    $pending: false,
                    $silentErrors: [
                         {
                              $propertyPath: 'lastname',
                              $property: 'lastname',
                              $validator: 'required',
                              $uid: 'lastname-required',
                              $message: 'Lastname is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                         {
                              $propertyPath: 'email',
                              $property: 'email',
                              $validator: 'required',
                              $uid: 'email-required',
                              $message: 'Email is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                         {
                              $propertyPath: 'password',
                              $property: 'password',
                              $validator: 'required',
                              $uid: 'password-required',
                              $message: 'Password is required',
                              $params: { type: 'required' },
                              $response: false,
                              $pending: false,
                         },
                    ],
                    firstname: {
                         $dirty: true,
                         $path: 'firstname',
                         required: {
                              $message: 'Firstname is required',
                              $params: { type: 'required' },
                              $pending: false,
                              $invalid: false,
                              $response: true,
                         },
                         $externalResults: [],
                         $invalid: false,
                         $pending: false,
                         $error: false,
                         $silentErrors: [],
                         $errors: [],
                         $model: '123',
                         $anyDirty: true,
                    },
                    lastname: {
                         $dirty: true,
                         $path: 'lastname',
                         required: {
                              $message: 'Lastname is required',
                              $params: { type: 'required' },
                              $pending: false,
                              $invalid: true,
                              $response: false,
                         },
                         $externalResults: [],
                         $invalid: true,
                         $pending: false,
                         $error: true,
                         $silentErrors: [
                              {
                                   $propertyPath: 'lastname',
                                   $property: 'lastname',
                                   $validator: 'required',
                                   $uid: 'lastname-required',
                                   $message: 'Lastname is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $errors: [
                              {
                                   $propertyPath: 'lastname',
                                   $property: 'lastname',
                                   $validator: 'required',
                                   $uid: 'lastname-required',
                                   $message: 'Lastname is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $model: '',
                         $anyDirty: true,
                    },
                    email: {
                         $dirty: true,
                         $path: 'email',
                         required: {
                              $message: 'Email is required',
                              $params: { type: 'required' },
                              $pending: false,
                              $invalid: true,
                              $response: false,
                         },
                         email: {
                              $message: 'Value is not a valid email address',
                              $params: { type: 'email' },
                              $pending: false,
                              $invalid: false,
                              $response: true,
                         },
                         $externalResults: [],
                         $invalid: true,
                         $pending: false,
                         $error: true,
                         $silentErrors: [
                              {
                                   $propertyPath: 'email',
                                   $property: 'email',
                                   $validator: 'required',
                                   $uid: 'email-required',
                                   $message: 'Email is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $errors: [
                              {
                                   $propertyPath: 'email',
                                   $property: 'email',
                                   $validator: 'required',
                                   $uid: 'email-required',
                                   $message: 'Email is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $model: '',
                         $anyDirty: true,
                    },
                    password: {
                         $dirty: true,
                         $path: 'password',
                         required: {
                              $message: 'Password is required',
                              $params: { type: 'required' },
                              $pending: false,
                              $invalid: true,
                              $response: false,
                         },
                         $externalResults: [],
                         $invalid: true,
                         $pending: false,
                         $error: true,
                         $silentErrors: [
                              {
                                   $propertyPath: 'password',
                                   $property: 'password',
                                   $validator: 'required',
                                   $uid: 'password-required',
                                   $message: 'Password is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $errors: [
                              {
                                   $propertyPath: 'password',
                                   $property: 'password',
                                   $validator: 'required',
                                   $uid: 'password-required',
                                   $message: 'Password is required',
                                   $params: { type: 'required' },
                                   $response: false,
                                   $pending: false,
                              },
                         ],
                         $model: '',
                         $anyDirty: true,
                    },
               },
          ];

          x.value = null;

          return {
               handleSubmit,
               data,
               loader,
               v$,
               rules,
          };
     },
};
</script>
