<template>
    <Spinner v-if="loading"/>
    <div v-else>
      <h1>Hello</h1>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components:{ Spinner },
  data() {
    return {
      loading: false
    }
  }

}
</script>
