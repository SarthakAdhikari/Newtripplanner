<template>
  <section class="main-footer">
    <div class="row">
      <div class="footer__links">
        <ul>
          <li>
            <h3>About Us</h3>
          </li>
          <li>Career</li>
          <li>News / Media</li>
          <li>For Investors</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>
            <h3>Explore More</h3>
          </li>
          <li>Our Blog</li>
          <li>Our Forum</li>
          <li>Road Trip Guide</li>
        </ul>
        <ul>
          <li>
            <h3>Download</h3>
          </li>
          <li>IOS</li>
          <li>Android</li>
        </ul>
      </div>
      <div class="social__links">
        <div class="social__icon">
          <i class="fab fa-facebook-f"></i>
        </div>
        <div class="social__icon">
          <i class="fab fa-twitter"></i>
        </div>
        <div class="social__icon">
          <i class="fab fa-instagram"></i>
        </div>
        <div class="social__icon">
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <p class="footer-text">
        Copyright &copy; 2019, Newtripplanner.
        <br>All Rights Reserved.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-footer {
  .row {
    max-width: 96rem;

    .footer-text {
      font-weight: 300;
      font-size: 1.4rem;
    }
  }

  background: $dark-grey;
  color: $light-grey;
  padding: 3rem 0 5rem 0;

  .social__links {
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    .social__icon {
      font-size: 3rem;
      color: $light-grey;
      display: flex;
      width: 5rem;
      height: 5rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: solid 2px $light-grey;
      transition: all 0.3s ease-out;

      &:hover {
        border-color: $primary-dark;
        color: $primary;
      }
    }

    .social__icon:not(:last-child) {
      margin-right: 3rem;
    }
  }

  .footer__links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 4rem;

    justify-items: center;

    > ul {
      li:not(:last-child) {
        margin-bottom: 1rem;
        color: $light-grey;
      }

      li {
        h3 {
          font-weight: 400;
          font-size: 2.4rem;
          margin-bottom: 2rem;
          color: $grey-1;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .main-footer {
    .social__links {
      .social__icon {
        font-size: 2rem;
        color: $light-grey;
        display: flex;
        width: 4rem;
        height: 4rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: solid 2px $light-grey;
        transition: border-color 0.3s ease-out;

        &:hover {
          border-color: $primary-dark;
          color: $primary;
        }
      }

      .social__icon:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}

@media screen and (max-width: 477px) {
  .main-footer {
    .footer__links {
      padding-left: 8rem;
      justify-items: start;
      grid-gap: 1rem;

      > ul:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>


