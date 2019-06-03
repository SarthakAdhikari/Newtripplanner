<template>
  <div>
    <app-hero></app-hero>
    <app-features color="#fff"></app-features>
    <app-blog></app-blog>
    <app-about></app-about>
  </div>
</template>

<script>

import Hero from "@/components/home/Hero"
import Blog from "@/components/home/Blog"
import Features from "@/components/home/Features"
import About from "@/components/home/About"

export default {
  components: {
    appHero: Hero,
    appFeatures: Features,
    appAbout: About,
    appBlog: Blog
  }
}
</script>

