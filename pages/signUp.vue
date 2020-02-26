<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <v-form class="form">
          <h1 class="subtitle-1">会員登録</h1>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            type="email"
            outlined
            label="your email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            type="password"
            outlined
            label="password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <v-text-field
            v-model="user.password_confirmation"
            type="password"
            outlined
            label="password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <BaseBtn>上記内容で新規登録</BaseBtn>
          <v-divider></v-divider>
          <nuxt-link to="signin">ログインはこちら</nuxt-link>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'sayapoko',
        birth_year: 2020,
        gender: 2,
        area_id: 1,
        email: 'email@example.com',
        password: 'password',
        password_confirmation: 'password'
      },
      nameRules: [(value) => !!value || '名前を入力してください'],
      emailRules: [
        (value) => !!value || 'Emailを入力してください',
        (value) =>
          value.indexOf('@') !== 0 || 'Emailのユーザーを入力してください',
        (value) => value.includes('@') || 'Emailに「@」が含まれていません',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          '有効なドメインを入力してください'
      ]
    }
  }
}
</script>

<style></style>
