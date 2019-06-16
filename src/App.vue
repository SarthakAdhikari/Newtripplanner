<template>
  <v-app>
    <div class="grid--layout">
      <app-header></app-header>
      <main>
        <router-view></router-view>
      </main>
      <app-footer></app-footer>
    </div>
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
  created() {
    this.$store.dispatch("tryAutoLogin");
    this.$store.dispatch("tryAutoFetchTripPlan");
  }
};
</script>

<style lang="scss" scoped>
.grid--layout {
  display: grid;
  grid-template-rows: auto fit-content(8rem);
  grid-template-areas:
    "main"
    "footer";
  height: 100%;
}

main {
  grid-area: main;
  margin-top: 6rem;
}
footer {
  grid-area: footer;
}
</style>




