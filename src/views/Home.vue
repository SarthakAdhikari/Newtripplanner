<template>
  <div>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-about></app-about>
  </div>
</template>

<script>

import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import About from "@/components/home/About"

export default {
  components: {
    appHero: Hero,
    appFeatures: Features,
    appAbout: About
  }
}
</script>

