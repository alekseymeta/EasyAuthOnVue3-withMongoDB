<template>
  <div id="nav" class="text-center mt-2 mb-2 container-fluid">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
    <div v-if="$store.state.auth.email" class="logout" >{{$store.state.auth.email}} <a href="#" @click="logout">(Logout)</a></div>
  </div>

</template>

<script>

export default {
  name: "navBar",
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      await this.$store.commit('SET_EMAIL', '')
      await this.$store.commit('SET_MSG', 'Вы вышли из системы')
      await this.$router.push('/login?message=logout')
    }
  }
}

</script>

<style scoped>
.logout {
  font-size: 12px;
  text-decoration: revert;
  margin-left: 5px;
}
</style>
