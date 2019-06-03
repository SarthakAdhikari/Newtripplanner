<template>
  <section class="trip-plan-response">
    <div class="hero">
      <div class="container">
        <div class="hero-text">
          <h2>{{ response.daysRequired }} Days Travel Plan</h2>
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
          <div></div>
          <h2 class="heading-secondary">Origin: {{ response.orig }}</h2>
        </div>
        <div v-for="(trip, index) of response.tripAttractions" :key="index" class="response-box">
          <!-- Trip Attraction Response Box -->
          <div v-if="returnResponseBox(trip)" class="trip-attraction-box">
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
          <!-- Drive ResponseBox -->
          <div class="trip-drive-box" v-else>
            <div>
              <div>
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
                    &nbsp;
                    &mdash;
                    &nbsp;
                    <span>{{ trip.endTime }}</span>
                    &nbsp;
                    ({{trip.hrDmd}} hours)
                  </p>
                </div>
              </div>
              <div>
                <!-- LeafletJS emed map -->
              </div>
            </div>
          </div>
        </div>
        <div class="trip-dest">
          <div></div>
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
  data() {
    return {
      response: {
        daysRequired: "4",
        tripPeriod: "Jan 24 to Jan 28, 2019",
        orig: "Kathmandu",
        dest: "Pokhara",
        tripAttractions: [
          {
            title: "Bouddha",
            date: "Jan 24",
            strtTime: "8 am",
            endTime: "1 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/Syambhu.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/02/Bhaktapur-durbar-Square.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Kathmandu-Durbar-Square.jpg"
            ],
            text:
              "Bouddha is the ancient buddhist stupa and one of the UNESCO Heritage Site located in Kathmandu Valley."
          },
          {
            title: "Swayambhunath",
            date: "Jan 24",
            strtTime: "2 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/Syambhu.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/02/Bhaktapur-durbar-Square.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Kathmandu-Durbar-Square.jpg"
            ],
            text:
              "Syambhunath is the ancient buddhist stupa and one of the UNESCO Heritage Site located in Kathmandu Valley."
          },
          {
            driveFrom: "Kathmandu",
            driveTo: "Chitwan",
            driveBy: "Drive",
            date: "Jan 25",
            strtTime: "7 am",
            endTime: "10 am",
            hrsDmd: "4"
          },
          {
            title: "Chitwan National Park",
            date: "Jan 25",
            strtTime: "12 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Chitwan National Park is one of the ancient national park."
          },
          {
            title: "Sauraha",
            date: "Jan 26",
            strtTime: "9 am",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Sauraha is the destination full of natural beauty."
          },
          {
            driveFrom: "Chitwan",
            driveTo: "Pokhara",
            driveBy: "Drive",
            date: "Jan 27",
            strtTime: "9 am",
            endTime: "5 pm",
            hrsDmd: "4"
          },
          {
            title: "Lake Phewa",
            date: "Jan 28",
            strtTime: "6 am",
            endTime: "12 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Phewa Lake is one of the beautiful places in Nepal."
          },
          {
            title: "Sarangkot",
            date: "Jan 28",
            strtTime: "1 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text:
              "Sarangkot is one of the most fascinating destination in Pokhara."
          }
        ]
      }
    };
  },
  components: {
    appFeatures: Features
  },
  methods: {
    returnResponseBox(trip) {
      for (let key in trip) {
        return key === "title";
      }
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
      display: grid;
      grid-template-columns: 20% 80%;
      div {
        height: 2rem;
        width: 2rem;
        background: $dark-grey;
        border-radius: 50%;
      }
    }

    .response-box {
      & > div {
        margin: 5rem 0;

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
          justify-content: baseline;

          span:not(:last-child) {
            padding-left: 2rem;
          }
        }

        article {
          display: grid;
          grid-template-columns: repeat(3, 25rem);
          grid-template-rows: 15rem;
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
  }
}
</style>
