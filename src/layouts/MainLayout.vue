<template>
    <router-view/>
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
