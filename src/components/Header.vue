<template>
  <div class="header">
    <div class="row">
      <nav>
        <div class="nav-container">
          <div class="logo-box">
            <p>Newtripplanner</p>
          </div>
          <div>
            <ul class="nav--items">
              <router-link class="nav__item" v-for="(menu, index) of menuItems" :key="index" :to="menu.to">{{ menu.title }}</router-link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      { title: "Destinations", to: "/" },
      { title: "Travel Forum", to: "/" },
      { title: "My plans", to: "/myplans" },
      { title: "Login / Sign in", to: "login-signin" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.header {
  background: $dark-grey;
  color: $light-grey;
  padding: 2rem 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1.5rem 3rem rgba($black, .5);

  nav {
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        .nav--items {
          list-style: none;
          display: flex;

          .nav__item:not(:last-child) {
            margin-right: 3rem;
          }

          .router-link-active {
            color: $light-grey;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
