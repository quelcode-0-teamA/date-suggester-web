<template>
  <div class="radio-tile-group">
    <div class="input-container">
      <input
        id="male"
        @change="$emit('change', $event.target.value)"
        value="0"
        class="radio-button"
        type="radio"
        name="gender"
        checked
      />
      <div class="radio-tile elevation-1">
        <div class="icon male-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z"
            />
          </svg>
        </div>
        <label for="male" class="radio-tile-label">male</label>
      </div>
    </div>

    <div class="input-container">
      <input
        id="female"
        @change="$emit('change', $event.target.value)"
        value="1"
        class="radio-button"
        type="radio"
        name="gender"
      />
      <div class="radio-tile elevation-1">
        <div class="icon female-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,22V16H7.5L10.09,8.41C10.34,7.59 11.1,7 12,7C12.9,7 13.66,7.59 13.91,8.41L16.5,16H13.5V22H10.5Z"
            />
          </svg>
        </div>
        <label for="female" class="radio-tile-label">female</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gender: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss"></style>
