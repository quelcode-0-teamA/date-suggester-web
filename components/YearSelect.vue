<template>
  <v-select :items="listyears" label="Birth Year" return-object></v-select>
</template>

<script>
export default {
  data() {
    return {
      // years: [1, 2, 3, 4, 45, 5, 6, 7, 8, 8, 8]
    }
  },
  listyears() {
    const years = []
    for (let i = 1930; i <= 2030; i++) {
      return years.push(i)
    }
    window.console.log(years)
  }
}
</script>

<style></style>
