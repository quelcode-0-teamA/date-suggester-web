<template>
  <v-btn @click="btnClick" rounded class="elevation-0">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },

  methods: {
    btnClick() {
      this.$emit('child-btn', this.$props.value)
    }
  }
}
</script>

<style></style>
