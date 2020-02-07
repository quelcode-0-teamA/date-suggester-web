<template>
  <v-app>
    <v-container fluid>
      <v-expansion-panels accordion popout multiple>
        <v-subheader>こんなプランはいかがですか？</v-subheader>
        <v-expansion-panel v-for="date in dates" :key="date.id">
          <v-expansion-panel-header>{{ date.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="cardlike">
              <v-img>写真</v-img>
              <p>ここにdescription</p>
            </div>
            <hr />
            <div>
              <p>ここに地図</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn @click="$router.push('/')" rounded class="pink accent-1"
        >違う条件でプランを組む</v-btn
      >
      <v-btn rounded class="pink accent-1">同じ条件で違うプランを探す</v-btn>
      <!-- fetchし直す -->
      <v-btn @click="$router.push('/detail')" rounded class="pink accent-1"
        >もっと詳しい条件で選ぶ</v-btn
      >
      <v-btn @click="$router.push('/mypage')" rounded class="pink accent-1"
        >このプランをマイページに保存する</v-btn
      >
    </v-container>
  </v-app>
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
      dates: [
        {
          id: 1,
          title: '猫カフェデート',
          area: '東京',
          date_day: '日付',
          checked: true
        },
        {
          id: 2,
          title: 'カフェめぐり',
          area: '東京',
          date_day: '日付'
        },
        {
          id: 3,
          title: 'ボルダリング',
          area: '東京',
          date_day: '日付'
        }
      ],
      isAvtive: '1'
    }
  }
}
</script>

<style>
v-col {
  padding: 0;
}

cardlike {
  display: flex;
}
</style>
