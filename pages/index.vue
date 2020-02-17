<template>
  <div class="root-div">
    <header>
      <div class="inner__header d-flex">
        <p>Date Suggester</p>
        <v-spacer></v-spacer>
        <nav>
          <ul class="d-flex">
            <li>
              Gallery
            </li>
            <li>
              Gallery
            </li>
            <li>
              Gallery
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="content">
      <div class="inner">
        <img class="image" src="~/assets/titleimg.jpg" />
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
        <nuxt-link to="questions">
          <v-btn class="elevation-0">質問に回答する</v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
$color-bg: #ffce00;
.root-div {
  width: 100%;
  height: 100%;
  justify-content: center;
}

.inner {
  width: 1280px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  // position: relative;
  &__header {
    padding: 60px 50px 50px;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
  }
}

header {
  height: 300px;
}

.content {
  background-color: $color-bg;
  width: 100%;
  height: 100%;
}

.image {
  width: 1140px;
  max-width: 100%;
  height: 760px;
  max-height: 100%;
  // width: 100%;
  // max-width: 1140px;
  // height: 100%;
  // max-height: 760px;
  border-radius: 5px;
  object-fit: cover;
  position: relative;
  top: -150px;
  // left: 0;
  // right: 0;
  // margin: 0 auto;
}
</style>
