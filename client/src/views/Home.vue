<template>
     <div class="home">
          <h2>Home</h2>

          <template v-if="authenticated">
               <h1>Logovan si:</h1>
               <hr />
               <b>IME:</b>
               <h2>{{ getCurrentUser.data.firstname }}</h2>
               <br />
               <b>PREZIME:</b>
               <h2>{{ getCurrentUser.data.lastname }}</h2>
               <br />
               <hr />
               <button>Log out</button>
          </template>

          <h1 v-else>Nisi logovan</h1>
     </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
     name: 'Home',
     setup() {
          const store = useStore();

          return {
               authenticated: computed(() => store.getters.authenticated),
               getCurrentUser: computed(() => store.getters.getUser),
          };
     },
};
</script>
