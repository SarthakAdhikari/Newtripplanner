<template>
  <div class="header">
    <!-- Mobile Header -->
    <v-navigation-drawer app temporary v-model="drawer" class="dark-grey">
      <v-toolbar dark class="py-1">
        <v-toolbar-title>
          <p class="logo-text" @click="goToHome">Newtripplanner</p>
        </v-toolbar-title>
      </v-toolbar>
      <nav>
        <ul class="mobile-nav--items">
          <router-link
            class="mobile-nav__item"
            v-for="(menu, index) of mobileMenuItems"
            :key="index"
            :to="menu.to"
          >{{ menu.title }}</router-link>
        </ul>
      </nav>
    </v-navigation-drawer>

    <!-- Desktop Header -->
    <div class="row">
      <nav>
        <div class="nav-container">
          <div class="logo-box">
            <div class="hamburger-icon" @click="drawer = !drawer">
              <v-toolbar-side-icon color="white"></v-toolbar-side-icon>
            </div>
            <span @click="goToHome" class="logo-text">Newtripplanner</span>
          </div>
          <div>
            <ul class="desktop-nav--items">
              <router-link
                class="desktop-nav__item"
                v-for="(menu, index) of desktopMenuItems"
                :key="index"
                :to="menu.to"
              >{{ menu.title }}</router-link>
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
    desktopMenuItems: [
      { title: "My plans", to: "/myplans" },
      { title: "Login / Sign in", to: "login-signin" }
    ],
    mobileMenuItems: [
      { title: "Home", to: "/" },
      { title: "My plans", to: "/myplans" },
      { title: "Login / Sign in", to: "login-signin" }
    ],
    drawer: false
  }),
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: $dark-grey;
  color: $light-grey;
  box-shadow: 0 2rem 4rem rgba($black, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  z-index: 100;

  nav {
    .mobile-nav--items {
      display: flex;
      flex-direction: column;
      padding: 4rem 2rem;
      font-size: 2rem;

      a {
        color: $light-grey;
        text-decoration: none;
        line-height: 6rem;
        padding: 0 3rem;

        &.router-link-exact-active {
          color: $primary;
          font-weight: bold;
        }
      }
    }
  }

  .row {
    width: 100%;
  }

  nav {
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-box {
        display: flex;
        justify-content: center;
        align-items: center;

        .hamburger-icon {
          margin-right: 1rem;
          display: none;
        }
      }

      div {
        .desktop-nav--items {
          list-style: none;
          display: flex;

          a {
            color: $light-grey;
            text-decoration: none;
            line-height: 6rem;
            padding: 0 3rem;

            &.router-link-exact-active {
              background: $primary;
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  .logo-text {
    cursor: pointer;
    font-size: 2.4rem;
    background: linear-gradient(124.85deg, #b01eff 0%, #e1467c 100%);
    display: inline-block;
    -webkit-background-clip: text;
    font-weight: bold;
    color: transparent;
    background-clip: text;
  }
}

@media screen and (max-width: 768px) {
  .header {
    nav {
      .nav-container {
        .logo-box {
          .hamburger-icon {
            display: block;
          }
        }

        div {
          .desktop-nav--items {
            display: none;
          }
        }
      }
    }
  }
}
</style>


