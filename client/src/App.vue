<template>
     <div id="nav">
          <!--               <router-link to="/">Home</router-link> |-->
          <!--               <router-link to="/contact">contact</router-link>-->
     </div>
     <router-view />
</template>

<style lang="scss">
@font-face {
     font-family: '../fonts/Inter';
     src: url('../src/assets/fonts/Inter-ExtraLight.woff2') format('woff2'), url('../src/assets/fonts/Inter-ExtraLight.woff') format('woff');
     font-weight: 200;
     font-style: normal;
     font-display: swap;
}

@font-face {
     font-family: 'Inter';
     src: url('../src/assets/fonts/Inter-Regular.woff2') format('woff2'), url('../src/assets/fonts/Inter-Regular.woff') format('woff');
     font-weight: normal;
     font-style: normal;
     font-display: swap;
}

@font-face {
     font-family: '../fonts/Inter';
     src: url('../src/assets/fonts/Inter-SemiBold.woff2') format('woff2'), url('../src/assets/fonts/Inter-SemiBold.woff') format('woff');
     font-weight: 600;
     font-style: normal;
     font-display: swap;
}

* {
     font-family: 'Inter', sans-serif;
     font-weight: normal;
     font-style: normal;

     &:focus {
          outline: none;
     }
}

body {
     margin: 0;
     padding: 0;

     a {
          text-decoration: none;
          color: #495057;
     }

     input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #fff inset;
          -moz-box-shadow: 0 0 0 100px #fff inset;
          box-shadow: 0 0 0 100px #fff inset;
     }
}
</style>
