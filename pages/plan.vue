<template>
  <div>
    <v-expansion-panels accordion popout multiple>
      <v-subheader>こんなプランはいかがですか？</v-subheader>
      <v-expansion-panel v-for="spot in date.spots" :key="spot.id">
        <v-expansion-panel-header>{{ date.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <div>
              <h2>TOHOシネマ新宿</h2>
              <p>
                ゴジラゴジラゴジラがやってくる
              </p>
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-img>サムネ</v-img>
              <v-btn text rounded><v-icon>mdi-phone</v-icon></v-btn>
              <v-btn text rounded><v-icon>mdi-web</v-icon></v-btn>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <p>ここに地図</p>
            </div>
            <div>ここに追加情報リスト</div>
          </div>
          <hr />
          <div>
            <div><img src="" /></div>
            <div>
              <span>肩書き</span>
              <span>名前</span>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <BaseBtn>同じ条件で違うプランを探す</BaseBtn>
    <nuxt-link to="/"><BaseBtn>違う条件でプランを組む</BaseBtn></nuxt-link>
    <nuxt-link to="/detail"
      ><BaseBtn>もっと詳しい条件で選ぶ</BaseBtn></nuxt-link
    >
    <nuxt-link to="/mypage"
      ><BaseBtn>このプランをマイページに保存する</BaseBtn></nuxt-link
    >
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
      date: {
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
      isAvtive: '1'
    }
  },
  asyncData({ query }) {
    console.log(query)
  }
}
</script>

<style></style>
