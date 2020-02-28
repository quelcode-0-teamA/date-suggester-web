<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <v-stepper v-model="s1" alt-labels class="elevation-0">
          <v-stepper-header class="elevation-0">
            <v-stepper-step :complete="s1 > 1" color="pink lighten-2" step="1"
              ><small>どこでデートする？</small>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s1 > 2" color="pink lighten-2" step="2"
              ><small>予算はどのくらい？</small>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s1 > 3" color="pink lighten-2" step="3"
              ><small>デートの時間帯は？</small>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s1 > 4" color="pink lighten-2" step="4"
              ><small>どんなデートの気分？</small>
            </v-stepper-step>
          </v-stepper-header>
          <v-divider></v-divider>
          <v-stepper-items>
            <v-stepper-content step="1">
              <div>
                <img src="~/assets/location.png" />
              </div>
              <form class="radio-group">
                <input
                  id="area0"
                  v-model="answers.date_area"
                  type="radio"
                  name="area"
                  value="0"
                />
                <label for="area0"> ちかく</label>
                <input
                  id="area1"
                  v-model="answers.date_area"
                  type="radio"
                  name="area"
                  value="1"
                />
                <label for="area1"> とおく</label>
                <p></p>
                <v-btn
                  @click="forward"
                  :disabled="!answers.date_area"
                  class="elevation-0"
                  rounded
                  >決定<v-icon>mdi-arrow-right-bold</v-icon></v-btn
                >
              </form>
            </v-stepper-content>
            <v-stepper-content step="2">
              <div>
                <img src="~/assets/money.png" />
              </div>
              <form class="radio-group">
                <input
                  id="budget0"
                  v-model="answers.date_budget"
                  type="radio"
                  name="budget"
                  value="0"
                />
                <label for="budget0"> せつやく</label>
                <input
                  id="budget1"
                  v-model="answers.date_budget"
                  type="radio"
                  name="budget"
                  value="1"
                />
                <label for="budget1"> ふつう</label>
                <input
                  id="budget2"
                  v-model="answers.date_budget"
                  type="radio"
                  name="budget"
                  value="2"
                />
                <label for="budget2"> ちょいリッチ</label>
                <p></p>
                <base-btn @child-btn="back" :value="answers.date_budget"
                  ><v-icon>mdi-arrow-left-bold</v-icon>戻る</base-btn
                >
                <v-btn
                  @click="forward"
                  :disabled="!answers.date_budget"
                  class="elevation-0"
                  rounded
                  >決定<v-icon>mdi-arrow-right-bold</v-icon></v-btn
                >
              </form>
            </v-stepper-content>
            <v-stepper-content step="3">
              <div>
                <img src="~/assets/time.png" />
              </div>
              <form class="radio-group">
                <input
                  id="time0"
                  v-model="answers.date_time"
                  type="radio"
                  name="time"
                  value="0"
                />
                <label for="time0"> 一日デート</label>
                <input
                  id="time1"
                  v-model="answers.date_time"
                  type="radio"
                  name="time"
                  value="1"
                />
                <label for="time1"> ランチデート</label>
                <input
                  id="time2"
                  v-model="answers.date_time"
                  type="radio"
                  name="time"
                  value="2"
                />
                <label for="time2"> 夜デート</label>
                <p></p>
                <base-btn @child-btn="back" :value="answers.date_time"
                  ><v-icon>mdi-arrow-left-bold</v-icon>戻る</base-btn
                >
                <v-btn
                  @click="forward"
                  :disabled="!answers.date_time"
                  class="elevation-0"
                  rounded
                  >決定<v-icon>mdi-arrow-right-bold</v-icon></v-btn
                >
              </form>
            </v-stepper-content>
            <v-stepper-content step="4">
              <div>
                <img src="~/assets/feeling.png" />
              </div>
              <form class="radio-group">
                <input
                  id="type0"
                  v-model="answers.date_type"
                  type="radio"
                  name="type"
                  value="0"
                />
                <label for="type0"> ごはん</label>
                <input
                  id="type1"
                  v-model="answers.date_type"
                  type="radio"
                  name="type"
                  value="1"
                />
                <label for="type1"> 動きたい</label>
                <input
                  id="type2"
                  v-model="answers.date_type"
                  type="radio"
                  name="type"
                  value="2"
                />
                <label for="type2"> まったり</label>
                <p></p>
                <base-btn @child-btn="back"
                  ><v-icon>mdi-arrow-left-bold</v-icon>戻る</base-btn
                >
                <nuxt-link to="suggest">
                  <v-btn
                    @click="updateAnswers"
                    :disabled="!answers.date_type"
                    class="elevation-0"
                    rounded
                    >決定
                    <v-icon>mdi-arrow-right-bold</v-icon>
                  </v-btn>
                </nuxt-link>
              </form>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      s1: 1,
      answers: {
        date_area: null,
        date_budget: null,
        date_time: null,
        date_type: null
      }
    }
  },
  computed: {
    // qParams() {
    //   return `?date_area=${this.$store.state.answers.date_area}&date_budget=${this.$store.state.answers.date_budget}&date_time=${this.$store.state.answers.date_time}&date_type=${this.$store.state.answers.date_type}`
    // },
    // ...mapState(['answers'])
  },
  methods: {
    log() {
      console.log()
    },
    forward() {
      this.s1++
    },
    back() {
      this.s1--
    },
    updateAnswers() {
      this.UPDATE_DATE_AREA(this.answers.date_area)
      this.UPDATE_DATE_BUDGET(this.answers.date_budget)
      this.UPDATE_DATE_TIME(this.answers.date_time)
      this.UPDATE_DATE_TYPE(this.answers.date_type)
    },
    ...mapMutations([
      'UPDATE_DATE_AREA',
      'UPDATE_DATE_BUDGET',
      'UPDATE_DATE_TIME',
      'UPDATE_DATE_TYPE'
    ])
  }
}
</script>

<style lang="scss"></style>
