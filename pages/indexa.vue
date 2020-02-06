<template>
  <v-app>
    <v-content class="root">
      <v-container class="container">
        <v-layout class="inner">
          <v-row>
            <v-col class="sidebar" cols="3">
              <div class="container">
                <div>
                  <img src="../assets/logo.svg" height="40px" />
                </div>
                <div class="justify-center">
                  <span>デートプランニング改革</span>
                  <h1>Date Suggester</h1>
                </div>
              </div>
              <v-card class="mx-auto side-bar" flat>
                <v-list>
                  <v-list-item v-for="item in items" :key="item.title" nuxt>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="9" class="pink lighten-4">
              <v-card class="pink lighten-4" flat>
                <v-card-title>
                  <span class="headline"
                    >デートプランを組むために以下について教えてください</span
                  >
                </v-card-title>
                <v-divider></v-divider>
                <v-card-content>
                  <v-form>
                    <v-text-field label="性別"></v-text-field>
                    <v-text-field label="年齢"></v-text-field>
                    <v-text-field label="地域"></v-text-field>
                    <v-text-field label="予算"></v-text-field>
                    <v-text-field label="時間帯"></v-text-field>
                    <v-text-field
                      label="何回デートにいきましたか？"
                    ></v-text-field>
                    <v-container fluid> </v-container>
                    <v-btn type="submit" rounded color="pink accent-2"
                      >これでプランを作成する</v-btn
                    >
                  </v-form>
                </v-card-content>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Services', icon: 'mdi-account-circle' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Admin', icon: 'mdi-gavel' }
      ]
    }
  }
}
</script>

<style>
:root {
  --main-side-color: rgba(84, 88, 113, 1);
}
.sidebar {
  height: 100vh;
  border-left: 1px solid pink;
}
.inner {
  max-width: 100%;
  width: 1080px;
  margin: 0 auto;
}
.container {
  padding: 0;
  display: flex;
}
</style>
