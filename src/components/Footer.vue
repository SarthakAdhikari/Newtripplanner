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
    </div>
    <div class="row text-center">
      <p class="footer-text">Copyright &copy; , 2019 Newtripplanner. All Rights Reserved.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-footer {
  .row {
    max-width: 96rem;

    .footer-text {
      margin: 3rem;
      font-weight: 300;
      font-size: 1.4rem;
    }
  }

  background: $dark-grey;
  color: $light-grey;
  padding: 3rem 0 5rem 0;

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

@media screen and (max-width: 476px) {
  .main-footer {

    .footer__links {
      padding-left: 8rem;
      justify-items: start;
      grid-gap: 1rem;
    }
  }
}
</style>


