<template>
  <div class="root-div">
    <header>
      <div class="inner__header d-flex">
        <p>Date Suggester</p>
      </div>
    </header>

    <div class="content">
      <div class="inner">
        <img class="image" src="~/assets/catcafe.jpg" />
        <div class="suggest">
          <h1>Title: 猫カフェデート</h1>
          <p>Description: ニャンコとマターリしたい</p>
          <v-chip label><v-icon left>mdi-map-marker</v-icon> {{ area }}</v-chip>
          <v-chip label
            ><v-icon left>mdi-currency-usd</v-icon> {{ budget }}</v-chip
          >
          <v-chip label
            ><v-icon left>mdi-clock-outline</v-icon> {{ time }}</v-chip
          >
        </div>
        <h2 class="text-left">デートコース</h2>
        <div class="suggest__list"></div>
        <nuxt-link to="questions">
          <v-btn class="elevation-0">質問に回答する</v-btn>
        </nuxt-link>
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
          thumb: 'URL//image/path/..'
        },
        {
          id: 2,
          name: 'スターバックス',
          time: '1時間30分',
          area: '新宿',
          thumb: 'URL//image/path/..'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$color-bg: #ffce00;

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
  h2 {
    padding-left: 120px;
  }
}

header {
  height: 300px;
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
.suggest {
  position: relative;
  top: -150px;
  &__list {
    text-align: left;
  }
}
</style>
