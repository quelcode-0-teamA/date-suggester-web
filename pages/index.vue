<template>
  <v-app>
    <v-container class="grey">
      <v-row class="blue full-height">
        <v-col cols="2" sm="3" class="grey lighten-2">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="@/assets/logo.svg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Date Suggester</v-list-item-title>
                <v-list-item-subtitle
                  >デートプランニング改革</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <nuxt-link
              :to="`${item.route}`"
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-col>
        <v-col cols="10" sm="9" class="pink lighten-5">
          <v-content>
            <v-container>
              <h1 class="headline">
                デートプランを組むために以下の質問にお答え下さい。<br />
                (以下質問ボタン群)
              </h1>
              <form>
                <v-row>
                  <v-col>
                    <v-radio label="yes"></v-radio>
                    <v-radio label="no"></v-radio>
                  </v-col>
                </v-row>
                <v-btn
                  @click="$router.push('/plan')"
                  type="submit"
                  rounded
                  color="pink accent-1"
                  >プランを見る(fetch)</v-btn
                >
              </form>
            </v-container>
          </v-content>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Plan', icon: 'mdi-view-dashboard', route: 'plan' },
        { title: 'Detail', icon: 'mdi-script-text', route: 'detail' },
        { title: 'Mypage', icon: 'mdi-account-circle', route: 'mypage' }
      ],
      navs: [{ name: 'plan' }, { name: 'detail' }, { name: 'mypage' }],
      miniVariant: true
    }
  }
}
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
