<template>
<div class="row">
  <div class="col-md-3 mb-2">
    <div class="p-4 shadow rounded bg-white">
      <verticalNav/>
    </div>
  </div>
  <div class="col-md-9 mb-2">
    <div class="p-4 shadow rounded bg-white">
      <h1>Hi, {{ $store.state.userInfo.userDataInfo.name }}</h1>
      <div class="mt-5">
        <p><strong>Your email: </strong>{{ $store.state.userInfo.userDataInfo.email }}</p>
        <p><strong>Creation time: </strong>{{ $store.state.userInfo.userDataInfoTime.creationTime }}</p>
        <p><strong>Your last sign: </strong>{{ $store.state.userInfo.userDataInfoTime.lastSignInTime }}</p>

      </div>
      <div class="mt-5">
        <button class="btn-sm btn-danger border-0" @click="$store.dispatch('logout')">Sign out</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import verticalNav from "../components/verticalNav";

export default {
  name: "profile",
  components: { verticalNav }
}
</script>

<style scoped>

</style>