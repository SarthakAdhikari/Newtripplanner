<template>
  <div>
    <h1>My plans in component</h1>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch('fetchUserPlans')
    }
  }
}
</script>


