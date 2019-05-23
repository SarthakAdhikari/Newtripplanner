<template>
  <section class="hero">
    <div class="row hero-container">
      <div class="form-container">
        <app-form></app-form>
      </div>
      <div class="hero-text">
        <h1 class="heading-primary">
          <span class="heading-primary__main">We plan you trip</span>
          <span class="heading-primary__sub">You enjoy the travel</span>
          <div>
            <app-mobile-form></app-mobile-form>
          </div>
        </h1>
      </div>
    </div>
    <svg width="100%" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#DADEDF">
        <animate
          repeatCount="indefinite"
          fill="freeze"
          dur="10s"
          attributeName="d"
          values="M0 31.5027C516 -109.497 909.243 283.432 1440 31.5027V181.503H0V31.5027Z;
                M0 21.5027C516 -9.497 809.243 283.432 1440 31.5027V181.503H0V31.5027Z;
                M0 76.5021C815 346.5 1030 -189.5 1440 76.5021V226.502H0V76.5021Z;
                M0 31.5027C516 -109.497 909.243 283.432 1440 31.5027V181.503H0V31.5027Z"
        ></animate>
      </path>
    </svg>
  </section>
</template>


<script>
import Form from "./form/Form";
import MobileForm from "./form/Mobileform"

export default {
  components: {
    appForm: Form,
    appMobileForm: MobileForm
  }
};
</script>


<style lang="scss" scoped>
section.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(to bottom, rgba($black, 0.65), rgba($black, 0.65)),
    url("./hero.jpg") top right/ cover no-repeat;

  .hero-container {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .hero-text {
      color: $light-grey;

      .heading-primary {
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        &__main {
          font-size: 7rem;
          display: block;
        }

        &__sub {
          font-size: 5rem;
          display: block;
          font-family: "Lato", sans-serif;
        }
      }
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

@media screen and (max-width: 960px) {
  section.hero {
    .hero-container {

      .hero-text {
        .heading-primary {
          &__main {
            font-size: 6rem;
          }

          &__sub {
            font-size: 4rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  section.hero {
    .hero-container {
      
      .form-container {
        display: none;
      }

      .hero-text {
        .heading-primary {
          &__main {
            font-size: 7rem;
          }

          &__sub {
            font-size: 5rem;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  section.hero {
    .hero-container {
      
      .form-container {
        display: none;
      }

      .hero-text {
        .heading-primary {
          &__main {
            font-size: 6rem;
          }

          &__sub {
            font-size: 4rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 470px) {
  section.hero {
    .hero-container {
      
      .form-container {
        display: none;
      }

      .hero-text {
        .heading-primary {
          &__main {
            font-size: 5rem;
          }

          &__sub {
            font-size: 3rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  section.hero {
    .hero-container {
      
      .form-container {
        display: none;
      }

      .hero-text {
        .heading-primary {
          &__main {
            font-size: 4rem;
          }

          &__sub {
            font-size: 3rem;
          }
        }
      }
    }
  }
}


</style>

