<template>
     <div class="container">
          <form @submit.prevent="userSignIn">
               <label for="username">
                    Username
                    <input type="text" id="username" placeholder="username" v-model="data.username" />
               </label>
               <br />
               <br />
               <label for="password">
                    Username
                    <input type="password" id="password" placeholder="password" v-model="data.password" />
               </label>
               <br />
               <br />
               <button>Submit</button>
          </form>
     </div>
</template>
<script>
import { ref } from 'vue';

export default {
     name: 'Login',
     setup() {
          const data = ref({
               username: '',
               password: '',
               error: false,
          });
          const userSignIn = () => {
               if (data.value.username && data.value.password) {
                    window.sessionStorage.setItem('auth', window.btoa(JSON.stringify({ username: data.value.username })));
                    data.value.error = false;
               }
               data.value.error = true;
               return false;
          };

          return {
               data,
               userSignIn,
          };
     },
};
</script>

<style scoped></style>
