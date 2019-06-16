<template>
  <section class="myplans">
    <div class="row text-center">
      <h1 class="heading-secondary heading-lg" v-if="userPlans.length <= 0">
        Currently there are no plans.
        <br>Try creating some plans.
      </h1>
      <div class="myplans-container" v-else>
        <div v-for="(userPlan, index) of userPlans" :key="index" class="plan">
          <div class="image-container">
            <img :src="userPlan.tripAttractions[0].images[1]">
            <span class="delete-btn">
              <v-btn
                dark
                color="dark-grey white--text"
                depressed
                fab
                small
                @click="deletePlan(index)"
              >
                <v-icon large>delete_outline</v-icon>
              </v-btn>
            </span>
          </div>
          <div class="text-center">
            <button class="btn-text" @click="goToResponse">View Plan &rarr;</button>
          </div>
        </div>
      </div>
    </div>
    <app-wave fillColor="#333"></app-wave>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userPlans: []
    };
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  created() {
    this.userPlans = this.$store.getters.getUserPlans;
  },
  methods: {
    deletePlan(index) {
      this.userPlans.splice(index, 1);
      localStorage.setItem("newTripPlannerPlans", this.userPlans);
      if (this.userPlans.length <= 0) {
        localStorage.removeItem("newTripPlannerPlans");
      }
    },
    goToResponse() {
      this.$router.push("/trip-plan-response");
    }
  }
};
</script>

<style lang="scss">
.myplans {
  position: relative;
  background: $light-grey;
  color: $dark-grey;

  h1 {
    padding: 5rem 0 16rem 0;
  }

  .myplans-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 5rem 0 16rem 0;

    .plan {
      background: #fff;

      .image-container {
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .delete-btn {
          margin: 0.15rem;
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      .btn-text {
        padding: 0.5rem 4rem;
      }
    }
  }
}

@media screen and (max-width: 656px) {
  .myplans {
    .myplans-container {
      padding: 5rem 10rem 20rem 5rem;
    }
  }
}

@media screen and (max-width: 400px) {
  .myplans {
    .row {
      .heading-lg {
        font-size: 2.25rem;
      }
    }
    .myplans-container {
      padding: 5rem 0 16rem 0;
    }
  }
}
</style>



