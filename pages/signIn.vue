<template>
  <v-app>
    <v-container>
      <v-form>
        <v-text-field
          v-model="email"
          type="email"
          outlined
          label="your email"
          prepend-inner-icon="mdi-email"
          color="pink accent-2"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          outlined
          label="password"
          prepend-inner-icon="mdi-lock"
          color="pink accent-2"
        ></v-text-field>
        <v-text-field
          v-model="password_confirmation"
          type="password"
          outlined
          label="password"
          prepend-inner-icon="mdi-lock"
          color="pink accent-2"
        ></v-text-field>
        <BaseBtn block>ログイン</BaseBtn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }
}
</script>

<style>
.form-div {
  width: 550px;
  max-width: 100%;
}
</style>
