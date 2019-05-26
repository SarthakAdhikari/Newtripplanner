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
    <app-wave fillColor="#DADEDF"></app-wave>
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

