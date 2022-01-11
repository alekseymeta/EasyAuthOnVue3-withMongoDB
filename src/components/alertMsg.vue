<template>
  <div id="alert">
    <transition name="fade">
      <div v-if="$store.state.alertMsg.msg" class="alert alert-warning" role="alert">
        {{ $store.state.alertMsg.msg }}
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: "alert"
}
</script>

<style scoped>
#alert {
  position: fixed;
  width: 100%;
  z-index: 10000;
  max-width: inherit;
  right: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.alert {
  font-size: 12px;
}

</style>
