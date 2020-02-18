<template>
  <div class="root-div">
    <header>
      <div class="inner__header d-flex">
        <p>Date Suggester</p>
      </div>
    </header>
    <div class="content">
      <div class="inner">
        <div class="question">
          <v-select
            :items="yearOptions"
            label="あなたの生まれた年を選んでください"
          ></v-select>
        </div>
        <div class="question">
          <span class="question__span">どこまでデートに出かけますか？</span>
          <div class="question__btn-wrapper">
            <v-btn class="elevation-0">近く（電車で1時間以内）</v-btn>
            <v-btn class="elevation-0">遠く（電車で1時間以上）</v-btn>
          </div>
        </div>
        <div class="question">
          <span class="question__span">ご予算はどのくらいですか？</span>
          <v-slider
            v-model="budget"
            thumb-label
            max="50000"
            color="grey darken-1"
            track-color="grey"
          >
          </v-slider>
        </div>
        <div class="question">
          <span class="question__span">デートの時間帯はいつ頃ですか？</span>
          <div class="question__btn-wrapper">
            <v-btn class="elevation-0">１日かける</v-btn>
            <v-btn class="elevation-0">ランチ</v-btn>
            <v-btn class="elevation-0">夜</v-btn>
          </div>
        </div>
        <div class="question">
          <span class="question__span">どんなデートがご希望ですか？</span>
          <div class="question__btn-wrapper">
            <v-btn class="elevation-0">食事</v-btn>
            <v-btn class="elevation-0">アクティブ</v-btn>
            <v-btn class="elevation-0">ゆったり</v-btn>
          </div>
        </div>
        <nuxt-link to="suggest">
          <v-btn class="elevation-0">質問に回答する</v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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

<style lang="scss" scoped>
$color-bg: #ffce00;

header {
  height: 150px;
}
.question {
  padding: 0 70px;
  margin-bottom: 200px;
  display: block;
  text-align: left;
  &__span {
    color: grey;
  }
  &__btn-wrapper {
    margin-top: 50px;
    text-align: center;
    button {
      margin: 0 15px;
      width: 250px;
    }
  }
}

.root-div {
  width: 100%;
  height: 100%;
  justify-content: center;
}

.inner {
  width: 1280px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  // position: relative;
  &__header {
    padding: 60px 50px 50px;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
  }
}

.content {
  background-color: $color-bg;
  width: 100%;
  height: 100%;
}

.image {
  width: 1140px;
  max-width: 100%;
  height: 760px;
  max-height: 100%;
  // width: 100%;
  // max-width: 1140px;
  // height: 100%;
  // max-height: 760px;
  border-radius: 5px;
  object-fit: cover;
  position: relative;
  top: -150px;
  // left: 0;
  // right: 0;
  // margin: 0 auto;
}
</style>
