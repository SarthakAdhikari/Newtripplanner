<template>
  <div id="app">
    <vue-particles
      color="#ff5454"
      :particleOpacity="0.7"
      :particlesNumber="200"
      shapeType="circle"
      :particleSize="5"
      linesColor="#f4f4f4"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <!-- Mobile View -->
    <div class="mobile-container">
      <div class="toggle-components">
        <button @click="selectLoginComponent" :class="{ active: activeClass}">Login</button>
        <button @click="selectSignUpComponent" :class="{ active: !activeClass}">Sign Up</button>
      </div>

      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>

    <!-- Desktop View -->
    <div class="desktop-container" id="container" :class="{'right-panel-active': toggleClass}">
      <!-- SignUp Form -->
      <app-sign-up></app-sign-up>
      <!-- Login Form -->
      <app-login></app-login>

      <!-- Overlay Container -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="btn btn--white" id="signIn" @click="toggleClass = !toggleClass">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="btn btn--white" id="signUp" @click="toggleClass = !toggleClass">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

    <app-wave fillColor="#333"></app-wave>
  </div>
</template>

<script>
import Login from "@/components/login-signup/Login";
import SignUp from "@/components/login-signup/SignUp";
export default {
  data: () => {
    return {
      toggleClass: false,
      activeClass: true,
      selectedComponent: "appLogin"
    };
  },
  components: {
    appLogin: Login,
    appSignUp: SignUp
  },
  methods: {
    selectLoginComponent() {
      this.selectedComponent = "appLogin";
      this.activeClass = true;
    },
    selectSignUpComponent() {
      this.selectedComponent = "appSignUp";
      this.activeClass = false;
    }
  }
};
</script>


<style lang="scss" scoped>
#app {
  background: linear-gradient(rgba(29, 25, 25, 0.7), rgba(0, 0, 0, 0.7)),
    url("./bg.jpg") top / cover no-repeat;
  height: 100vh;
  position: relative;
  padding-top: 4rem;

  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<style lang="scss" scoped>
.mobile-container {
  display: none;
}

.desktop-container {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.25), 0 1rem 1rem rgba(0, 0, 0, 0.22);
  position: relative;
  z-index: 10;
  overflow: hidden;
  width: 70rem;
  max-width: 100%;
  margin: auto;
  min-height: 55rem;

  button:focus {
    outline: none;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    .overlay {
      background: linear-gradient(124.85deg, #b01eff 0%, #e1467c 100%) no-repeat
          0 0 / cover,
        #ff416c;
      color: #fff;
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      transform: translateX(0);
      transition: transform 0.6s ease-in-out;

      .overlay-panel {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 4rem;
        height: 100%;
        width: 50%;
        text-align: center;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;

        .overlay-left {
          transform: translateX(-20%);
        }

        &.overlay-right {
          right: 0;
          transform: translateX(0);
        }

        p {
          font-weight: 300;
          line-height: 2rem;
          letter-spacing: 0.5px;
          margin: 2rem 0 3rem;
        }
      }
    }
  }
}

/* Animation */

.desktop-container {
  &.right-panel-active {
    /* Move signin to the right */
    .sign-in-container {
      transform: translateX(100%);
    }

    /* Move overlay to left */

    .overlay-container {
      transform: translateX(-100%);
    }

    /* Bring sign up over sign in */
    .sign-up-container {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    }

    /* Move overlay back to right */
    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateX(0);
    }

    .overlay-right {
      transform: translateX(20%);
    }
  }
}

@media screen and (max-width: 768px) {
  .desktop-container {
    display: none;
  }

  .mobile-container {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.25),
      0 1rem 1rem rgba(0, 0, 0, 0.22);
    position: relative;
    z-index: 10;
    overflow: hidden;
    width: 70rem;
    max-width: 100%;
    min-height: 48rem;
    max-width: 35rem;
    margin: -1rem auto 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    .toggle-components {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      z-index: 20;
      width: 100%;
      padding: 1rem 0;
      background: $light-grey;

      button {
        padding: 0.5rem 2rem;
        text-decoration: none;
        cursor: pointer;
        font: inherit;
        border-bottom: solid 2px transparent;
        transition: all 0.2s ease-out;

        &:hover {
          border-color: $primary;
        }

        &.active {
          border-color: $primary;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .mobile-container {
    width: 90%;
  }
}
</style>


