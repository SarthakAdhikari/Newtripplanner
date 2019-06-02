<template>
  <section class="blog">
    <div class="row text-center">
      <h2 class="heading-secondary heading-lg section__title">Featured Blog</h2>
    </div>
    <div class="row">
      <div class="blog-container">
        <div class="blog-post-container">
          <div class="blog-post" v-for="post of blogPosts" :key="post.id">
            <div class="feature-image">
              <img :src="post.feature_image" :alt="post.title">
            </div>
            <div class="blog-post__content">
              <h2 class="blog-post__title">{{ post.title }}</h2>
              <p v-html="post.html"></p>
              <div>
                <a
                  :href="post.url"
                  class="btn-text"
                  target="_blank"
                  rel="noopener"
                >Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-wave fillColor="#f4f4f4"></app-wave>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogPosts: []
    };
  },
  created() {
    axios
      .get(
        "http://newtripplanner.com/blog/ghost/api/v0.1/posts/?limit=4&client_id=ghost-frontend&client_secret=dac9790641ff"
      )
      .then(res => {
        const posts = res.data.posts;
        for (let post of posts) {
          const blogPost = {};
          for (let key in post) {
            if (key === "url") {
              blogPost[key] = "http://newtripplanner.com/blog" + post[key];
            }
            if (key === "feature_image") {
              blogPost[key] = "http://newtripplanner.com" + post[key];
            }
            if (key === "id" || key === "title") {
              blogPost[key] = post[key];
            }
            // Use if you need updated at date ( Be sure to import moment.js library first )
            /* if (key === "updated_at") {
              blogPost.fromNow = moment(post[key], "YYYYMMDD").fromNow();
            } */
            if (key === "html") {
              blogPost[key] = post[key].substring(0, 170) + "...";
            }
          }
          this.blogPosts.push(blogPost);
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.blog {
  background: $white;
  position: relative;
  padding: 5rem 0 20rem 0;

  .blog-post-container {
    display: grid;
    grid-gap: 5rem;

    .blog-post {
      background: $light-grey;
      .feature-image {
        img {
          width: 100%;
        }
      }

      .blog-post__content {
        padding: 1rem;
        color: $dark-grey;

        .blog-post__title {
          margin-bottom: 1rem;
          font-size: 2rem;
          background: linear-gradient(124.85deg, #b01eff 0%, #e1467c 100%);
          display: inline-block;
          -webkit-background-clip: text;
          font-weight: bold;
          color: transparent;
          background-clip: text;
        }

        div {
          padding-top: 1rem;
        }
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .blog {
    .blog-post-container {
      padding: 0 5rem;
    }
  }
}

@media screen and (min-width: 600px) {
  .blog {
    .blog-post-container {
      padding: 0 10rem;
    }
  }
}

@media screen and (min-width: 772px) {
  .blog-container {
    padding: 5rem 0;

    .blog-post-container {
      position: relative;
      overflow: hidden;
      padding: 0;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, auto);
      grid-gap: 3rem;

      .blog-post {
        position: relative;
        overflow: hidden;
        .feature-image {
          background: $black;
          overflow: hidden;
          height: 100%;

          img {
            height: 100%;
            transform: scale(1.2);
            opacity: 0.75;
            transition: all 0.3s ease-out;
          }
        }

        &:hover {
          .feature-image img {
            transform: scale(1.03);
            opacity: 1;
          }

          .blog-post__content {
            transform: translate(0);
            transition: all 0.4s ease-out;
            transition-delay: 0.3s;
          }
        }

        .blog-post__content {
          position: absolute;
          padding: 1rem 2rem;
          width: 100%;
          height: 100%;
          background: rgba($black, 0.6);
          bottom: 0;
          transform: translateY(100%);
          color: $light-grey;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .blog-post__title {
            font-size: 2rem;
            background: linear-gradient(124.85deg, #b01eff 0%, #e1467c 100%);
            display: inline-block;
            -webkit-background-clip: text;
            font-weight: bold;
            color: transparent;
            background-clip: text;
          }

          p {
            font-size: 1.5rem;
            font-weight: normal;
            color: $light-grey;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 850px) {
  .blog-container {
    .blog-post-container {
      grid-gap: 4rem;

      .blog-post {
        .blog-post__content {
          .blog-post__title {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 960px) {
  .blog-container {
    .blog-post-container {
      grid-gap: 5rem;

      .blog-post {
        .blog-post__content {
          .blog-post__title {
            font-size: 3rem;
          }
        }
      }
    }
  }
}
</style>



