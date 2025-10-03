<script setup lang="ts">
import '~/assets/styles/main.css'

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style scoped>
.page-leave-active,
.page-enter-active {
  transition: all .2s;
  opacity: 1;
  right: 0px;
  position: relative;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  right: -100px;
}
</style>