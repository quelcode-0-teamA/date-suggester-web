<template>
  <div>
    <div class="content">
      <div class="inner">
        <img :src="suggest.thumb" class="top__img" />
        <div class="suggest">
          <h1>{{ suggest.title }}</h1>
          <p>{{ suggest.description }}</p>
          <v-chip label
            ><v-icon left>mdi-map-marker</v-icon> {{ suggest.area }}</v-chip
          >
          <v-chip label
            ><v-icon left>mdi-currency-usd</v-icon>
            {{ suggest.total_budget }}</v-chip
          >
          <v-chip label
            ><v-icon left>mdi-clock-outline</v-icon> {{ suggest.time }}</v-chip
          >
        </div>
        <h2 class="text-left">デートコース</h2>
        <div class="suggest__list">
          <div v-for="aspot in suggest.spots" class="suggest__list-item">
            <img :src="aspot.thumb" />
            <div>
              <h3>{{ aspot.name }}</h3>
              <v-chip label
                ><v-icon left>mdi-map-marker</v-icon>{{ aspot.area }}</v-chip
              >
              <v-chip label
                ><v-icon left>mdi-currency-usd</v-icon
                >{{ aspot.budget }}</v-chip
              >
              <v-chip label
                ><v-icon left>mdi-clock-outline</v-icon>{{ aspot.time }}</v-chip
              >
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <nuxt-link to="questions">
            <v-btn rounded class="elevation-0" outlined>他の提案を見る</v-btn>
          </nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="questions">
            <v-btn rounded class="elevation-0">このプランを保存する</v-btn>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      title: '映画デート',
      description: '新宿でまったりと映画デート♪',
      area: '新宿',
      budget: '2,500円',
      time: '4時間',
      thumb: 'URL//image/path/..',
      spots: [
        {
          id: 1,
          name: 'TOHOシネマ',
          time: '2時間',
          area: '新宿',
          thumb: `https://movie.jorudan.co.jp/theater/images/640/J1001999.jpg`
        },
        {
          id: 2,
          name: 'スターバックス',
          time: '1時間30分',
          area: '新宿',
          thumb: `https://www.starbucks.co.jp/assets/images/press_release/images/2016/20160705.jpg`
        }
      ]
    }
  },
  computed: {
    // mapGetters([])
  },
  asyncData({ store, $axios }) {
    console.log($axios)
    // return {}
    return $axios
      .$get(
        `https://api-date-suggester-dev.herokuapp.com/v1/date-suggest${store.getters.qParams}`,
        {
          headers: {
            Authorization: 'Bearer ' + 'vLDjuV1hFabyYesjmfZRS8E8'
          }
        }
      )
      .then((response) => {
        console.log(response)
        return {
          suggest: response
        }
      })
  }
}
</script>

<style lang="scss"></style>
