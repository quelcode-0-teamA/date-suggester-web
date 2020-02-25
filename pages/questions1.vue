<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <div class="question">
          <v-form>
            <v-select
              :items="yearOptions"
              outlined
              label="あなたの生まれた年を選んでください"
            ></v-select>
            <v-text-field label="行動範囲を聞く問い"></v-text-field>
          </v-form>
        </div>

        <nuxt-link to="suggest">
          <v-btn rounded class="elevation-0">質問に回答する</v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp_user: {
        birth_year: 1990,
        area_id: 1
      }
    }
  },
  computed: {
    yearOptions() {
      const years = []
      for (let i = 2030; i > 1930; i--) {
        years.push(i)
      }
      return years
    }
  }
}
</script>

<style lang="scss">
.question {
  padding: 0 70px;
  margin-bottom: 200px;
  display: block;
  text-align: left;
  &__span {
    color: grey;
  }
}
</style>
