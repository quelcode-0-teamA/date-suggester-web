<template>
  <v-app>
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
  </v-app>
</template>

<script>
export default {}
</script>

<style></style>
