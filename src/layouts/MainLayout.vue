<template>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  async mounted() {
    await this.$store.dispatch('fetchInfo')
  }
}
</script>

<style scoped>

</style>
