<template>
     <section class="register">
          <div class="register__container">
               <div class="register__container-inner">
                    <h2 class="register__title">Sign Up</h2>
                    <div class="register__content">
                         <form class="register__form" @submit.prevent="handleSubmit">
                              <div class="input input--firstname">
                                   <input
                                        type="text"
                                        name="firstname"
                                        v-model="data.firstname"
                                        autocomplete="firstname"
                                        placeholder="Firstname"
                                   />
                              </div>
                              <div class="input input--lastname">
                                   <input
                                        type="text"
                                        name="lastname"
                                        v-model="data.lastname"
                                        autocomplete="lastname"
                                        placeholder="Lastname"
                                   />
                              </div>

                              <div class="input input--email">
                                   <input type="email" name="email" v-model="data.email" autocomplete="email" placeholder="Email" />
                              </div>

                              <div class="input input--password">
                                   <input
                                        type="password"
                                        name="password"
                                        v-model="data.password"
                                        autocomplete="password"
                                        placeholder="Password"
                                   />
                              </div>

                              <div class="register__content__bottom">
                                   <router-link to="/login" class="register__link">Back to login</router-link>
                              </div>
                              <button class="register__submit">Sign in</button>
                         </form>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
import { ref } from 'vue';

export default {
     name: 'Register',
     setup() {
          const data = ref({
               firstname: '',
               lastname: '',
               email: '',
               password: '',
          });

          return {
               data,
          };
     },
};
</script>

<style scoped lang="scss">
.register {
     @include authPage;
}
</style>
