<template>
    <Spinner v-if="loading"/>
    <div v-else>
      <h1>Hello</h1>
      <blocks/>
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
