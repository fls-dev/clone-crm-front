<template>
  <div class="body-content">

    <div class="services">
      <div class="box-service">
        <router-link :to="{ name: 'dashboard'}">service 1</router-link>
      </div>
      <div class="box-service">
        <router-link :to="{ name: 'dashboard'}">service 2</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consultations.vue"
}
</script>

<style scoped>

</style>
