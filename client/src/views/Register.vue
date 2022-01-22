<template>
     <section class="register">
          <div class="register__container">
               <div class="register__container-inner">
                    <h2 class="register__title">Sign Up</h2>
                    <div class="register__content">
                         <form class="register__form" @submit.prevent="handleSubmit">
                              <div class="input input--firstname">
                                   <input type="text" name="firstname" autocomplete="firstname" placeholder="Firstname" />
                              </div>

                              <div class="input input--lastname">
                                   <input type="text" name="lastname" autocomplete="lastname" placeholder="Lastname" />
                              </div>

                              <div class="input input--email">
                                   <input type="email" name="email" autocomplete="email" placeholder="Email" />
                              </div>

                              <div class="input input--password">
                                   <input type="password" name="password" autocomplete="password" placeholder="Password" />
                              </div>

                              <div class="register__content__bottom">
                                   <router-link to="/register" class="register__link">Register</router-link>
                                   <router-link to="/register" class="register__link">Forgot your password?</router-link>
                              </div>
                              <button class="register__submit">Sign in</button>
                         </form>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {
     name: 'Register',
};
</script>

<style scoped lang="scss">
.register {
     @include authPage;
}
</style>
