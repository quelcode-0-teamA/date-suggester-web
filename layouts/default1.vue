<template>
  <v-app>
    <v-app-bar class="gradient elevation-0" dense app height="40px">
      <img src="../assets/logo.svg" height="30px" />
      <v-toolbar-title>デートプラン改革</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="pink--text text--accent-4">
          <nuxt-link :to="`${nav.route}`" v-for="nav in navs" :key="nav.title">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ nav.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ nav.title }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  css: ['@/assets/main.css'],
  data() {
    return {
      drawer: false,
      navs: [
        { title: 'Plan', icon: 'mdi-view-dashboard', route: 'plan' },
        { title: 'Detail', icon: 'mdi-script-text', route: 'detail' },
        { title: 'Mypage', icon: 'mdi-account-circle', route: 'mypage' }
      ]
    }
  }
}
</script>
<style>
* {
  text-align: center;
}
.gradient {
}
</style>
