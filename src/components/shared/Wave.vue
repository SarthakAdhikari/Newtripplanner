<template>
    <svg width="100vw" height="150" xmlns="http://www.w3.org/2000/svg" >
    <path :fill="fillColor">
      <animate
        repeatCount="indefinite"
        fill="freeze"
        dur="10s"
        attributeName="d"
        values="M0 31.5027C516 -109.497 909.243 283.432 2060 31.5027V181.503H0V31.5027Z;
                M0 21.5027C516 -9.497 809.243 283.432 2060 31.5027V181.503H0V31.5027Z;
                M0 76.5021C815 346.5 1030 -189.5 2060 76.5021V226.502H0V76.5021Z;
                M0 31.5027C516 -109.497 909.243 283.432 2060 31.5027V181.503H0V31.5027Z"
      ></animate>
    </path>
  </svg>
</template>

<script>
export default {
  props: ["fillColor"]
};
</script>


<style lang="scss" scoped>
svg {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
