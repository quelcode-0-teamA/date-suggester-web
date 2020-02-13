<template>
  <v-app>
    <v-container>
      <v-form>
        <v-text-field
          v-model="user.email"
          type="email"
          outlined
          label="your email"
          prepend-inner-icon="mdi-email"
          color="pink accent-2"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          type="password"
          outlined
          label="password"
          prepend-inner-icon="mdi-lock"
          color="pink accent-2"
        ></v-text-field>
        <v-text-field
          v-model="user.password_confirmation"
          type="password"
          outlined
          label="password"
          prepend-inner-icon="mdi-lock"
          color="pink accent-2"
        ></v-text-field>
        <BaseBtn>上記内容で新規登録</BaseBtn>
      </v-form>
      <v-btn @click="register"></v-btn>
    </v-container>
  </v-app>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  data() {
    return {
      user: {
        name: 'asdf',
        birth_year: '111',
        gender: '1',
        area_id: '1',
        email: 'aiai@a',
        password: 'aaa',
        password_confirmation: 'aaa'
      }
    }
  },
  methods: {
    register() {
      // console.log(this.user)
      const params = JSON.stringify({ user: this.user })
      EventService.apiDate
        .post('/v1/sign_up', params)
        .then((response) => console.log(response))
    }
  }
}
</script>

<style></style>
