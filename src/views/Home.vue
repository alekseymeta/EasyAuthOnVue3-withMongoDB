<template>
  <div class="container-fluid mt-5">
    <Spinner v-if="loading"/>
    <div v-else>
      <h1>Hello</h1>
      <blocks/>
    </div>
  </div>
</template>

<script>

import blocks from "../components/blocks";

export default {
  name: 'Home',
  components: {blocks},
  data() {
    return {
      loading: false
    }
  }

}
</script>
