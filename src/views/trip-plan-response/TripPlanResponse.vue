<template>
  <section class="trip-plan-response" v-if="response !== null">
    <div class="hero">
      <div class="container">
        <div class="hero-text">
          <h2>{{ response.days_required }} Days Travel Plan</h2>
          <div>
            <div class="calendar-icon">
              <v-icon color="light-grey" size="3rem">calendar_today</v-icon>
            </div>
            <p>{{ response.tripPeriod }}</p>
          </div>
        </div>
        <app-wave fillColor="#f4f4f4"></app-wave>
      </div>
    </div>
    <div class="trip-response">
      <div class="container">
        <div class="trip-orig">
          <div class="icon">
            <div>
              <div></div>
            </div>
          </div>
          <h2 class="heading-secondary">Origin: {{ response.orig }}</h2>
        </div>
        <div v-for="(trip, index) of response.tripAttractions" :key="index" class="response-box">
          <!-- Trip Attraction Response Box -->
          <div v-if="returnResponseBox(trip)" class="trip-attraction-box">
            <div class="trip-attraction__indent">
              <div class="line">
                <div>{{ changeIndex(index) }}</div>
              </div>
            </div>
            <div class="trip-attraction__info">
              <h3 class="response__title">{{ trip.title }}</h3>
              <div class="response__date">
                <span>{{ trip.date }}</span>
              </div>
              <div>
                <p class="response__icon">
                  <v-icon color="dark-grey" size="3rem">schedule</v-icon>
                  <span>{{ trip.strtTime }}</span>
                  &nbsp;
                  &mdash;
                  &nbsp;
                  <span>{{ trip.endTime }}</span>
                  &nbsp;
                  ({{trip.hrDmd}} hours)
                </p>
              </div>
              <p>{{trip.text}}</p>
              <article>
                <figure v-for="(image, index) of trip.images" :key="index">
                  <img :src="image">
                </figure>
              </article>
            </div>
          </div>
          <!-- Drive ResponseBox -->
          <div class="trip-drive-box" v-else>
            <div class="trip-drive__icon">
              <div class="line">
                <div>
                  <v-icon color="light-grey" size="4rem">local_car_wash</v-icon>
                </div>
              </div>
            </div>
            <div class="trip-drive__container">
              <div class="trip-drive__info">
                <h3 class="response__title">
                  Drive
                  <br>
                  &nbsp; From: {{ trip.driveFrom}}
                  <br>
                  &nbsp; To: {{ trip.driveTo}}
                </h3>
                <div class="response__date">
                  <span>{{ trip.date }}</span>
                </div>
                <div>
                  <p class="response__icon">
                    <v-icon color="dark-grey" size="3rem">schedule</v-icon>
                    <span>{{ trip.strtTime }}</span>
                    &mdash;
                    <span>{{ trip.endTime }}</span>
                    &nbsp;
                    ({{trip.hrDmd}} hours)
                  </p>
                </div>
              </div>
              <!-- LeafletJS embed map -->
              <div class="trip-drive__map">
                <img src="./map.png" alt="Google Map">
              </div>
            </div>
          </div>
        </div>
        <div class="trip-dest">
          <div class="icon">
            <div>
              <div></div>
            </div>
          </div>
          <h2 class="heading-secondary">Destination: {{ response.dest }}</h2>
        </div>
      </div>
      <app-wave fillColor="#DADEDF"></app-wave>
    </div>
    <app-features color="#333"></app-features>
  </section>
</template>

<script>
import Features from "@/components/home/Features";
export default {
  computed: {
    response() {
      const tripID = this.$store.getters.getViewTripID;
      if (tripID !== null) {
        const tripPlans = JSON.parse(localStorage.getItem("newTripPlans"));
        let res;
        tripPlans.forEach(el => {
          if (el.trip_id === tripID) {
            res = el.response;
          }
        });
        return res;
      } else {
        if (this.$store.getters.getIndividualResponse !== null) {
          return this.$store.getters.getIndividualResponse;
        }
        this.$router.push("/");
      }
    }
  },
  components: {
    appFeatures: Features
  },
  methods: {
    returnResponseBox(trip) {
      for (let key in trip) {
        return key === "title";
      }
    },
    changeIndex(index) {
      if (index % 3 === 0) {
        index = 0;
      } else if ((index - 1) % 3 === 0) {
        index = 1;
      }
      return index + 1;
    }
  }
};
</script>


<style lang="scss" scoped>
.trip-plan-response {
  .hero {
    position: relative;
    height: 60vh;
    background: $white;
    background: linear-gradient(
        to bottom,
        rgba($black, 0.65),
        rgba($black, 0.65)
      ),
      url("./bg.jpg") center / cover no-repeat, $primary;

    .hero-text {
      height: 45vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $light-grey;

      h2 {
        font-size: 5rem;
        padding-bottom: 1rem;
      }

      div {
        display: flex;
        justify-content: baseline;
        font-size: 3rem;

        .calendar-icon {
          margin-right: 2rem;
        }
      }
    }
  }

  .trip-response {
    background: $light-grey;
    position: relative;
    padding: 5rem 0 15rem 0;

    .trip-orig,
    .trip-dest {
      display: flex;

      .icon {
        width: 20%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          width: 10rem;
          display: flex;
          justify-content: center;

          div {
            height: 4rem;
            width: 4rem;
            background: $dark-grey;
            border-radius: 50%;
            position: relative;
            z-index: 20;
          }
        }
      }

      h2 {
        width: 70%;
      }
    }

    .response-box {
      .trip-attraction-box {
        margin: 5rem 0;
        display: flex;

        .trip-attraction__indent {
          width: 20%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .line {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 10rem;
            height: 100%;
            position: relative;

            &::after {
              left: 50%;
              content: "";
              background: $primary;
              height: 140%;
              width: 3px;
              position: absolute;
              transform: translateX(-50%);
            }

            div {
              width: 10rem;
              height: 10rem;
              background: $primary;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 4rem;
              color: $light-grey;
              position: relative;
              z-index: 10;
            }
          }
        }

        .trip-attraction__info {
          width: 80%;
          .response__title {
            font-size: 3rem;
            color: $primary;
          }

          .response__date {
            font-size: 1.2rem;
            color: #777;
            margin-top: 1rem;
          }

          .response__icon {
            font-size: 2.4rem;
            margin: 2rem 0;
            display: flex;
            align-items: center;

            span:not(:last-child) {
              padding-left: 2rem;
            }
          }

          article {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 20rem;
            grid-gap: 3rem;
            margin: 2rem 0;

            figure {
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          border-bottom: solid 1px $dark-grey;
        }
      }

      .trip-drive-box {
        display: flex;

        .trip-drive__icon {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .line {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 10rem;
            height: 100%;
            position: relative;

            &::after {
              left: 50%;
              content: "";
              background: $primary;
              height: 140%;
              width: 3px;
              position: absolute;
              transform: translateX(-50%);
            }

            div {
              width: 10rem;
              height: 10rem;
              background: $primary;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 4rem;
              color: $light-grey;
              position: relative;
              z-index: 10;
            }
          }
        }
        .trip-drive__container {
          width: 80%;
          display: flex;
          justify-content: space-between;

          .trip-drive__info {
            .response__title {
              font-size: 3rem;
              color: $primary;
            }

            .response__date {
              font-size: 1.2rem;
              color: #777;
              margin-top: 1rem;
            }

            .response__icon {
              font-size: 2.4rem;
              margin: 2rem 0;
              display: flex;
              align-items: center;

              span:not(:last-child) {
                padding-left: 2rem;
              }
            }
          }

          .trip-drive__map {
            width: 50%;
            img {
              width: 100%;
            }
          }

          border-bottom: solid 1px $dark-grey;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .trip-plan-response {
    .trip-response {
      .trip-orig,
      .trip-dest {
        .icon {
          div {
            width: 8rem;
          }
        }
      }

      .response-box {
        .trip-attraction-box {
          .trip-attraction__indent {
            width: 20%;

            .line {
              width: 8rem;
              div {
                width: 8rem;
                height: 8rem;
              }
            }
          }

          .trip-attraction__info {
            article {
              grid-gap: 1rem;
            }
          }
        }

        .trip-drive-box {
          .trip-drive__icon {
            .line {
              width: 8rem;
              div {
                width: 8rem;
                height: 8rem;
              }
            }
          }
          .trip-drive__container {
            flex-direction: column;

            .trip-drive__map {
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .trip-plan-response {
    .trip-response {
      .response-box {
        .trip-attraction-box {
          .trip-attraction__info {
            article {
              grid-template-columns: repeat(2, 1fr);
              figure:last-child {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .trip-plan-response {
    .hero {
      .hero-text {
        h2 {
          font-size: 4rem;
        }

        div {
          font-size: 2rem;

          .calendar-icon {
            margin-right: 1rem;
          }
        }
      }
    }

    .trip-response {
      .trip-orig,
      .trip-dest {
        display: flex;

        .icon {
          width: 30%;
          div {
            width: 7rem;
          }
        }

        h2 {
          width: 60%;
          font-size: 1.8rem;
        }
      }

      .response-box {
        .trip-attraction-box {
          .trip-attraction__indent {
            width: 30%;

            .line {
              width: 7rem;
              div {
                width: 7rem;
                height: 7rem;
              }
            }
          }

          .trip-attraction__info {
            width: 70%;
            .response__title {
              font-size: 2rem;
            }

            .response__date {
              font-size: 1.2rem;
            }

            .response__icon {
              font-size: 1.8rem;
            }

            article {
              grid-template-rows: 12rem;
            }
          }
        }

        .trip-drive-box {
          .trip-drive__icon {
            width: 30%;
            .line {
              width: 7rem;
              div {
                width: 7rem;
                height: 7rem;
              }
            }
          }
          .trip-drive__container {
            width: 70%;
            .trip-drive__info {
              .response__title {
                font-size: 2rem;
              }

              .response__date {
                font-size: 1.2rem;
              }

              .response__icon {
                font-size: 1.8rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .trip-plan-response {
    .hero {
      .hero-text {
        h2 {
          font-size: 3rem;
        }

        div {
          font-size: 1.8rem;
        }
      }
    }

    .trip-response {
      .trip-orig,
      .trip-dest {
        .icon {
          width: 30%;
          div {
            width: 6rem;
          }
        }

        h2 {
          width: 60%;
          font-size: 1.8rem;
        }
      }

      .response-box {
        .trip-attraction-box {
          margin: 2rem 0;

          .trip-attraction__indent {
            .line {
              width: 6rem;

              &::after {
                height: 120%;
              }
              div {
                width: 6rem;
                height: 6rem;
              }
            }
          }

          .trip-attraction__info {
            article {
              grid-template-rows: 20rem;
              grid-template-columns: 1fr;

              figure:not(:first-child) {
                display: none;
              }
            }
          }
        }
        .trip-drive-box {
          .trip-drive__icon {
            .line {
              width: 6rem;
              div {
                width: 6rem;
                height: 6rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .trip-plan-response {
    .trip-response {
      .trip-orig,
      .trip-dest {
        h2 {
          width: 60%;
          font-size: 1.6rem;
        }
      }

      .response-box {
        .trip-attraction-box {
          .trip-attraction__info {
            .response__title {
              font-size: 1.8rem;
              margin: 0.5rem 0;
            }

            .response__date {
              margin-top: 0.5rem;
            }

            .response__icon {
              font-size: 1.4rem;
              margin: 1rem 0;

              span:not(:last-child) {
                padding-left: 0.5rem;
              }
            }
            article {
              grid-template-rows: 15rem;
              grid-template-columns: 1fr;
              margin: 1rem 0;

              figure:not(:first-child) {
                display: none;
              }
            }
          }
        }

        .trip-drive-box {
          .trip-drive__container {
            .trip-drive__info {
              .response__title {
                font-size: 1.8rem;
                margin: 0.5rem 0;
              }

              .response__date {
                margin-top: 0.5rem;
              }

              .response__icon {
                font-size: 1.4rem;
                margin: 1rem 0;

                span:not(:last-child) {
                  padding-left: 0.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
