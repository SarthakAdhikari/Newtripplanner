<template>
  <v-app>
    <header>
      <app-header></app-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">


</style>




