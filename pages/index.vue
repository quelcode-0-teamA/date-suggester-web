<template>
  <div>
    <div class="q-phrase">
      <span>早速ですが</span>
      <br />
      <span>あなたの性別を教えてください</span>
    </div>
    <div class="radio-tile-group">
      <input id="male" type="radio" name="gender" />
      <label class="radio-label" for="male">
        <v-icon>mdi-account</v-icon>
        <span>男性</span>
      </label>
      <input id="female" type="radio" name="gender" />
      <label class="radio-label" for="female">
        <v-icon>mdi-account</v-icon>
        <span>女性</span>
      </label>
    </div>
    <div class="skip">
      <span>skip</span>
    </div>
    <div>
      <span>入力されると、最適な提案に近くなります</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
