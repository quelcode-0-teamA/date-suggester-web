<template>
  <header>
    <div class="inner__header">
      <nuxt-link to="/">
        <p>Date Suggester</p>
      </nuxt-link>
      <v-spacer></v-spacer>
      <nav>
        <ul>
          <li>
            <nuxt-link to="questions1">
              プランを探す
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="mypage">
              マイページ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="signin">
              ログイン
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="signup" class="signup">
              新規登録
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
