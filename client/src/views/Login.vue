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
                                   <router-link to="/register" class="login__link">Forgot your password?</router-link>
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

          // const userSignIn = () => {
          //      if (data.value.username && data.value.password) {
          //           window.sessionStorage.setItem('auth', window.btoa(JSON.stringify({ username: data.value.username })));
          //           data.value.error = false;
          //      }
          //      data.value.error = true;
          //      return false;
          // };

          return {
               data,
               handleSubmit,
          };
     },
};
</script>

<style scoped lang="scss">
.login {
     &__container {
          @include flex(flex, center, center);
          height: 100vh;
          background-color: $brand-color-1;
     }

     &__container-inner {
          position: relative;
          top: -50px;
          width: 100%;
          text-align: center;
          margin: 0 20px;

          @include from(425px) {
               width: 360px;
          }
     }

     &__title {
          font-weight: 600;
          font-size: 30px;
     }

     &__form {
          display: flex;
          flex-direction: column;

          .input {
               display: flex;

               input {
                    @include size(100%, 40px);
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #495057;
                    border: 1px solid #00000029;
                    background-color: transparent;
                    border-radius: 5px;
                    padding: 2px 10px;

                    &:focus {
                         border-color: $brand-color-2;
                    }
               }
          }
     }

     &__content {
          &__bottom {
               margin: 20px 0;
               display: flex;
               justify-content: space-between;
          }
     }

     &__link {
          font-size: 14px;
          color: $brand-color-2;

          &:hover {
               color: $brand-color-3;
          }
     }

     &__submit {
          width: 100%;
          border: none;
          border-radius: 5px;
          color: $white;
          text-transform: uppercase;
          padding: 1rem;
          background-color: $brand-color-2;

          &:hover {
               background-color: $brand-color-3;
               cursor: pointer;
          }
     }
}
</style>
