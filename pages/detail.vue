<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <div class="suggest__list">
          <div class="suggest__list-item">
            <img :src="thumb" />
          </div>
          <div class="suggest__list-item">
            <h1>{{ name }}</h1>
            <p>{{ description }}</p>
            <div class="suggest-list">
              <v-chip label
                ><v-icon left>mdi-map-marker</v-icon> {{ prefectures }}</v-chip
              >
              <v-chip label
                ><v-icon left>mdi-currency-usd</v-icon> {{ budget }}</v-chip
              >
              <v-chip label
                ><v-icon left>mdi-clock-outline</v-icon> {{ time }}</v-chip
              >
            </div>
            <br />
            <span>{{ 混み具合 }}</span>
            <br />
            <span>{{ 喫煙 }}</span>
            <br />
            <span> {{ 天気 }}</span>
            <br />
            <a :href="`tel:${tel}`">
              <v-chip label><v-icon left>mdi-phone</v-icon>{{ tel }}</v-chip>
            </a>
            <br />
            <a :href="url">
              <v-chip label><v-icon left>mdi-earth</v-icon>HPを見る</v-chip>
            </a>
          </div>
        </div>

        <div class="btn-wrapper">
          <nuxt-link to="questions">
            <v-btn rounded class="elevation-0" outlined>戻る</v-btn>
          </nuxt-link>
          <v-spacer></v-spacer>
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
      name: 'TOHOシネマ新宿',
      description: 'ゴジラ、ゴジラ、ゴジラがやってくる',
      prefectures: '新宿',
      address: '東京都新宿区..',
      budget: '2,500円',
      tel: '03-1234-5678',
      time: '2時間',
      thumb: `https://movie.jorudan.co.jp/theater/images/640/J1001999.jpg`,
      url: 'http://spot/url/..',
      混み具合: 'こみがっちー',
      喫煙: '喫煙おけ',
      天気: '雨天可だぜ'
    }
  }
}
</script>

<style></style>
