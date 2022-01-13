<template>
    <Spinner v-if="loading"/>
    <div v-else>
      <h1>Hello</h1>
    </div>
</template>

<script>
import Spinner from '@/components/global/spinner'

export default {
  name: 'Home',
  components: { Spinner },
  data() {
    return {
      loading: false
    }
  }

}
</script>
