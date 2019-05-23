<template>
  <v-app>
    <header>
      <app-header></app-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    </footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    appHeader: Header
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




