<template>
  <div>
    <div class="question__phrase">
      <span>早速ですが</span>
      <br />
      <span>あなたの性別を教えてください</span>
    </div>
    <div>
      <nuxt-link to="plan" class="d-inline-block">
        <input
          id="male"
          @click="add"
          name="gender"
          class="question__input"
          type="radio"
          value="0"
        />
        <label for="male" class="question__radio-label center">
          <img src="~/assets/man.png" alt="" />
          <span>男性</span>
        </label>
      </nuxt-link>
      <nuxt-link to="plan" class="d-inline-block">
        <input
          id="female"
          @click="add"
          name="gender"
          class="question__input"
          type="radio"
          value="1"
        />
        <label for="female" class="question__radio-label center">
          <img src="~/assets/woman.png" alt="" />
          <span>女性</span>
        </label>
      </nuxt-link>
    </div>
    <div class="question__skip">
      <span>skip</span>
    </div>
    <div class="question__remark">
      <span>入力されると、最適な提案に近くなります</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add(event) {
      this.$store.dispatch('addGender', event.target.value)
    }
  }
}
</script>

<style></style>
