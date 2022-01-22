<template>
     <section class="login">
          <div class="login__container">
               <div class="login__container-inner">
                    <h2 class="login__title">Sign in to your account</h2>
                    <div class="login__content">
                         <form class="login__form" @submit.prevent="handleSubmit">
                              <div class="input input--email">
                                   <input type="email" v-model="data.email" name="email" autocomplete="email" placeholder="Email" />
                              </div>
                              <div class="input input--password">
                                   <input
                                        type="password"
                                        v-model="data.password"
                                        name="password"
                                        autocomplete="password"
                                        placeholder="Password"
                                   />
                              </div>
                              <div class="login__content__bottom">
                                   <router-link to="/register" class="login__link">Register</router-link>
                                   <router-link to="/forgot-password" class="login__link">Forgot your password?</router-link>
                              </div>
                              <button class="login__submit">Sign in</button>
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
               email: '',
               password: '',
          });

          const handleSubmit = () => {
               console.log(data.value.password);
               console.log(data.value.email);
          };

          return {
               data,
               handleSubmit,
          };
     },
};
</script>

<style scoped lang="scss">
.login {
     @include authPage;
}
</style>
