<template>
  <v-app>
    <v-container fluid>
      <h1 class="headline">選択肢を選んでください</h1>
      <v-form>
        <v-radio-group row>
          <v-radio label="男性" value="radio-1"></v-radio>
          <v-radio label="女性" value="radio-2"></v-radio>
          <v-radio label="その他" value="radio-3"></v-radio>
        </v-radio-group>
        <!-- <v-date-picker></v-date-picker> -->
        <!-- 年代の選択肢 -->
        <v-radio-group row>
          <v-radio label="近場" value="radio-1"></v-radio>
          <v-radio label="ちょっと遠出" value="radio-2"></v-radio>
        </v-radio-group>
        <v-radio-group row>
          <v-radio label="節約" value="radio-1"></v-radio>
          <v-radio label="普通" value="radio-2"></v-radio>
          <v-radio label="ちょいリッチ" value="radio-3"></v-radio>
        </v-radio-group>
        <v-radio-group row>
          <v-radio label="一日コース" value="radio-1"></v-radio>
          <v-radio label="ランチコース" value="radio-2"></v-radio>
          <v-radio label="夜デート" value="radio-3"></v-radio>
        </v-radio-group>
        <v-btn @click="$router.push('/plan')" rounded class="pink accent-1"
          >この条件でプランを組む！</v-btn
        >
        <!-- @clickでfetch組み込む -->
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
