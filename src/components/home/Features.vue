<template>
  <section class="features">
    <div class="row text-center">
      <h2 class="heading-secondary heading-lg section__title">Manage Your Trip</h2>
    </div>
    <div class="row">
      <div class="features__list">
        <div v-for="(feature, index) of features" :key="index" class="feature">
          <div class="feature__icon">
            <v-icon size="10rem" color="primary">{{ feature.icon }}</v-icon>
          </div>
          <p class="text-center">{{ feature.text}}</p>
        </div>
      </div>
    </div>
    <app-wave :fillColor="color"></app-wave>
  </section>
</template>

<script>
export default {
  props: ["color"],
  data: () => {
    return {
      features: [
        { icon: "person_add", text: "Become a plus member" },
        { icon: "email", text: "Itinerary on email" },
        { icon: "event", text: "Calendar snooze" },
        { icon: "touch_app", text: "Email Subscribe" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.features {
  background: $grey-1;
  padding: 6rem 0 10rem 0;
  position: relative;

  .features__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10;

    .feature {
      background: $white;
      padding: 2rem;
      width: 22rem;
      height: 22rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      border-radius: 2rem;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
      transition: transform 0.3s ease-out;

      &:hover {
        transform: translateY(-1rem) scale(1.04);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
      }

      p {
        margin-top: 2rem;
        color: $primary;
        font-size: 2.4rem;
      }
    }
  }

  svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

@media screen and (max-width: 1080px) {
  .features {
    .features__list {
      .feature {
        width: 20rem;
        height: 20rem;
      }
    }
  }
}

@media screen and (max-width: 870px) {
  .features {
    .features__list {
      .feature:last-child {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 670px) {
  .features {
    .features__list {
      flex-direction: column;
      align-items: center;
      .feature:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>


