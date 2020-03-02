<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <img class="top__img" src="~/assets/titleimg.jpg" />
        <div>
          <h1>Date Suggester へようこそ</h1>
          <br />
          <p>
            当アプリでは、<br /><br />
            「デートには行きたいけどプランを組む時間がない」<br /><br />
            そんなあなたの為に、<br />
            デートプランのご提案をさせていただきます。<br /><br />
            サービスの提供にあたり、<br />
            いくつかの質問にお答えください。<br />
            ・<br />
            ・<br />
            ・<br />
          </p>
        </div>
        <nuxt-link to="questions1">
          <v-btn rounded class="elevation-0">質問に回答する</v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
