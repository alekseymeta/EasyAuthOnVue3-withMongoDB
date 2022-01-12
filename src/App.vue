<template>
  <div class="alert__b position-relative">
  <alertMsg/>
  </div>
  <navBar/>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import navBar from "./components/global/navBar";
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
import alertMsg from "./components/global/alertMsg";

export default {
  name: 'Home',
  components: {navBar, EmptyLayout, MainLayout, alertMsg },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }

}
</script>

<style>

body {
  font-family: 'Gilroy', sans-serif !important;
  font-size: 14px !important;
}

.alert__b {
  max-width: 300px;
  margin: 0 auto;
}


</style>
