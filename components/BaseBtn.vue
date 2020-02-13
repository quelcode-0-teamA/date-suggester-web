<template>
  <v-btn :to="choose" rounded class="pink lighten-4 elevation-0">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    choose: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
