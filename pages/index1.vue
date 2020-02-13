<template>
  <v-app>
    <v-container>
      <v-form>
        <!-- <v-date-picker></v-date-picker> -->
        <!-- 年代の選択肢 -->
        <!-- <YearSelect /> -->
        <span>回答を元にプランを提案します</span>
        <br />
        <span>Q.性別を選んでください</span>
        <RadioGender @change="setGender" :gender="date.gender" />
        <span>Q.どこまでお出かけしますか？</span>
        <RadioArea @change="setArea" :area="date.area" />
        <span>Q.予算はどのくらいですか？</span>
        <RadioBudget @change="setBudget" :budget="date.budget" />
        <span>Q.デートの時間帯を教えてください</span>
        <RadioTime @change="setTime" :time="date.time" />
        <nuxt-link
          :to="{
            name: 'plan',
            query: {
              gender: date.gender,
              date_area: date.area,
              date_budget: date.budget,
              date_time: date.time
            }
          }"
        >
          <BaseBtn>この条件でプランを探す</BaseBtn>
        </nuxt-link>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import EventService from '@/services/EventService.js'
import RadioGender from '@/components/RadioGender.vue'
import RadioArea from '@/components/RadioArea.vue'
import RadioBudget from '@/components/RadioBudget.vue'
import RadioTime from '@/components/RadioTime.vue'
export default {
  components: {
    RadioGender,
    RadioArea,
    RadioBudget,
    RadioTime
  },
  data() {
    return {
      date: {
        gender: 0,
        area: 0,
        budget: 0,
        time: 0,
        type: 0
      }
    }
  },
  methods: {
    setGender(gender) {
      this.date.gender = parseInt(gender)
    },
    setArea(area) {
      this.date.area = parseInt(area)
    },
    setBudget(budget) {
      this.date.budget = parseInt(budget)
    },
    setTime(time) {
      this.date.time = parseInt(time)
    },
    searchPlan() {
      const params = JSON.stringfy(this.date)
      const query = URLSearchParams(params)
      EventService.apiDate.get('/v1/date-suggest', query)
    }
  }
}
</script>

<style lang="scss"></style>
