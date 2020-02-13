<template>
  <div class="container scroll">
    <div>
      <h1 class="headline">{{ suggest.title }}</h1>
      <p>{{ suggest.description }}</p>
      <div>
        <img class="plan-img" src="~/assets/imgsaru.jpg" alt="" />
      </div>
      <v-expansion-panels class="wrapper shadow" accordion multiple>
        <v-expansion-panel v-for="spo in suggest.spots" :key="spo.id">
          <v-expansion-panel-header>
            <div>
              <span>
                {{ spo.name }}
              </span>
              <span>
                {{ spo.time }}
              </span>
              <span>
                {{ spo.area }}
              </span>
            </div>
            <v-spacer></v-spacer>
            <div>
              <img :src="spot.thumb" class="thumb" alt="" />
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex">
              <div>
                <h2>{{ spot.name }}</h2>
                <p>
                  {{ spot.description }}
                </p>
              </div>
              <v-spacer></v-spacer>
              <div>
                <div>
                  <v-btn text rounded>
                    <a :href="`tel:${spot.tel}`">
                      <v-icon>mdi-phone</v-icon>
                    </a>
                  </v-btn>
                  <v-btn text rounded>
                    <a :href="spot.url" target="_brank">
                      <v-icon>mdi-web</v-icon>
                    </a>
                  </v-btn>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <p>ここに地図取得して表示</p>
              </div>
              <div>
                <v-chip-group column>
                  <v-chip label>混み具合: {{ spot.混み具合 }}</v-chip>
                  <v-chip label>喫煙: {{ spot.喫煙 }}</v-chip>
                  <v-chip label>天気: {{ spot.天気 }}</v-chip>
                </v-chip-group>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <nuxt-link to="/"><BaseBtn>違う条件でプランを組む</BaseBtn></nuxt-link>
      <nuxt-link to="/mypage"
        ><BaseBtn>このプランを保存する</BaseBtn></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      navs: [
        { title: 'Plan', icon: 'mdi-view-dashboard', route: 'plan' },
        { title: 'Detail', icon: 'mdi-script-text', route: 'detail' },
        { title: 'Mypage', icon: 'mdi-account-circle', route: 'mypage' }
      ],
      miniVariant: true,
      suggest: {
        id: 1,
        title: '猫カフェデート',
        description: 'にゃんことまったりしたい',
        area: '吉祥寺',
        time: '3時間30分',
        thumb: 'URL//image/path/..',
        spots: [
          {
            id: 1,
            name: 'てまりのおうち',
            time: '2時間',
            area: '吉祥寺',
            thumb: 'URL//image/path/..'
          },
          {
            id: 2,
            name: 'スターバックス',
            time: '1時間30分',
            area: '吉祥寺',
            thumb: 'URL//image/path/..'
          }
        ]
      },
      spot: {
        id: 1,
        name: 'TOHOシネマ新宿',
        description: 'ゴジラ、ゴジラ、ゴジラがやってくる',
        prefectures: '新宿',
        address: '東京都新宿区..',
        budget: '2,500円',
        tel: '03-1234-5678',
        time: '2時間',
        thumb: 'http://thats-poker.net/wp-content/uploads/2016/04/a-11.jpg',
        url: 'https://www.tagindex.com/html5/text/a_tel.html',
        混み具合: 'こみがっちー',
        喫煙: '喫煙おけ',
        天気: '雨天可だぜ'
      },
      isAvtive: '1'
    }
  },
  asyncData({ query }) {
    console.log(query)
  },
  methods: {
    // adjast(this.spot.url){
    test() {
      console.log(this.spot.url)
      return this.spot.url
    }
    // }
  }
}
</script>

<style></style>
