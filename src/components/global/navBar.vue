<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="bi bi-gem"></i></a>
      <div class="navbar-collapse justify-content-end" id="navbarNavDropdown">
<!--        <div>-->
<!--          <form class="d-flex">-->
<!--            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--&lt;!&ndash;            <button class="btn btn-outline-success" type="submit">Search</button>&ndash;&gt;-->
<!--          </form>-->
<!--        </div>-->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li v-if="!$store.state.userInfo.userDataInfo.email" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item dropdown">
            <a v-if="$store.state.userInfo.userDataInfo.email" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="pr-2">⚡️</span> {{($store.state.userInfo.userDataInfo.name)}}
            </a>
            <ul class="dropdown-menu position-absolute shadow border-0" aria-labelledby="navbarDropdownMenuLink">
              <li><div class="dropdown-item bill">Your bill: {{$store.state.userInfo.userDataInfo.bill}}</div></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a @click="logout" class="dropdown-item" href="#">Выйти</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  name: "navBar",
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      await this.$store.commit('SET_MSG', 'Вы вышли из системы')
      await this.$router.push('/login?message=logout')
    }
  }
}

</script>

<style scoped>

.navbar-brand {
  margin: 0 auto;
}

.navbar-nav {
  justify-content: center;
  gap: 25px;
  flex-direction: inherit;
  /*padding-right: 25px;*/
}

.nav-link {
  color: black !important;
  font-weight: 500;
}

.nav-link:hover {
  border-bottom: 3px black solid;
  padding-bottom: 3px !important;
}

.nav-link:focus {
  border-bottom: 3px black solid;
  padding-bottom: 3px !important;
}

.bi-gem {
  font-size: 28px;
}

.form-control {
  border-radius: 100px;
  background: whitesmoke;
  border: none;
}

.dropdown-menu {
  margin-left: -70px;
  font-size: 14px;
}

.bill:hover {
  background-color: transparent;
}

.bill {
  background-color: cornsilk;
  font-weight: 500;
  margin-bottom: 20px;
  pointer-events: none;
  font-size: 16px;
}

.pr-2 {
  padding-right: 5px;
}
</style>
