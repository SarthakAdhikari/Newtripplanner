<template>
  <section class="about">
    <div class="row text-center">
      <h2 class="heading-secondary heading-lg section__title">About Us</h2>
    </div>
    <div class="row">
      <div class="about-container">
        <div class="about__img">
          <img src="./about.jpg" alt="About Us">
        </div>
        <div class="about__text">
          <p>
            We plan for your trip so that you can enjoy the travel. We encorporate as much input from you and use
            our in-house complex algorithm developed based on travel experiences by multiple people and locals
            recommendations so that we will provide you best optimized travel itenary to suit your lifestayle,
            which can be shared across multiple platforms such as email, mobile and text message.
            You may also save it as calender snooze or, simply image file and get reminder for upcoming activities.
          </p>
          <p>
            We are super excited to be your travel guide. You can also conenct with the local gudes and using our
            platform, you can also connect with fellow travellers. We beleive in travel with social work and the
            portion of the profit from the company with be given to community with less privelege and for the
            education for young childrens in impoverished area.
          </p>
          <p>
            We appreciate you feedback as it will help fellow traveler to better plan their trip. Please feel
            free to send us feedback at contact@newtripplanner.com. You may also provide your ratings of the new
            place.
          </p>
        </div>
      </div>
    </div>
    <app-wave fillColor="#333"></app-wave>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background: $light-grey;
  padding: 6rem 0 14rem 0;
  position: relative;
  color: $dark-grey;

  .about-container {
    position: relative;
    z-index: 10;

    display: grid;
    grid-gap: 5rem;
    grid-template-columns: 25rem 1fr;

    .about__img img {
      width: 100%;
    }

    .about__text {
      p {
        text-indent: 4rem;
        margin-bottom: 3rem;
        text-align: justify;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .about {
    .about-container {
      .about__text {
        p {
          text-indent: 2rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    .row {
      .about-container {
        display: block;

        .about__img img {
          margin-bottom: 3rem;
        }
      }
      padding: 0 10rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .about {
    .row {
      .about-container {
        display: block;

        .about__img img {
          margin-bottom: 3rem;
        }
      }
      padding: 0 5rem;
    }
  }
}

@media screen and (max-width: 400px) {
  .about {
    .row {
      .about-container {
        display: block;

        .about__img img {
          margin-bottom: 3rem;
        }
      }
      padding: 0 2rem;
    }
  }
}
</style>


