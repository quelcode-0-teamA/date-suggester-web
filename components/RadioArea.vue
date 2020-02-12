<template>
  <div class="radio-tile-group">
    <div class="input-container">
      <input
        id="adjacent"
        @change="$emit('change', $event.target.value)"
        value="0"
        class="radio-button"
        type="radio"
        name="area"
        checked
      />
      <div class="radio-tile elevation-1">
        <div class="icon adjacent-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"
            />
          </svg>
        </div>
        <label for="adjacent" class="radio-tile-label">近く</label>
      </div>
    </div>

    <div class="input-container">
      <input
        id="excursion"
        @change="$emit('change', $event.target.value)"
        value="1"
        class="radio-button"
        type="radio"
        name="area"
      />
      <div class="radio-tile elevation-1">
        <div class="icon excursion-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20A1,1 0 0,0 6,21H7A1,1 0 0,0 8,20V19H16V20A1,1 0 0,0 17,21H18A1,1 0 0,0 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z"
            />
          </svg>
        </div>
        <label for="excursion" class="radio-tile-label">ちょっと遠出</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss"></style>
