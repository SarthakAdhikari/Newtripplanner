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
    <app-wave fillColor="#fff"></app-wave>
  </section>
</template>

<script>
export default {
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
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    position: relative;
    z-index: 10;

    .feature {
      background: $white;
      padding: 4rem;
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
}

@media screen and (max-width: 926px) {
  .features {
    .features__list {
      .feature:last-child {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 696px) {
  .features {
    .features__list {
      .feature:last-child {
        display: block;
      }
    }
  }
}
</style>


