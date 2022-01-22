<!--<form @submit.prevent="userSignIn">-->
<!--<label for="username">-->
<!--  Username-->
<!--  <input type="text" id="username" placeholder="username" v-model="data.username" />-->
<!--</label>-->
<!--<br />-->
<!--<br />-->
<!--<label for="password">-->
<!--  Username-->
<!--  <input type="password" id="password" placeholder="password" v-model="data.password" />-->
<!--</label>-->
<!--<br />-->
<!--<br />-->
<!--<button>Submit</button>-->
<!--</form>-->

<template>
     <section class="login">
          <div class="login__container">
               <div class="login__container-inner">
                    <!-- Title -->
                    <h2 class="login__title">Sign in to your account</h2>
                    <!-- Content -->
                    <div class="login__content">
                         <form>
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />

                              <div class='login__content__bottom'>
                                   <router-link to='/register'>Register</router-link>
                                   <router-link to='/register'>Forgot your password?</router-link>
                              </div>

                              <button class='login__submit'>Sign in</button>
                         </form>
                    </div>
               </div>
          </div>
     </section>
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
