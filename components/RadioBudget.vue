<template>
  <div class="radio-tile-group">
    <div class="input-container">
      <input
        id="saving"
        @change="$emit('change', $event.target.value)"
        value="0"
        class="radio-button"
        type="radio"
        name="budget"
        checked
      />
      <div class="radio-tile">
        <div class="icon saving-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z"
            />
          </svg>
        </div>
        <label for="saving" class="radio-tile-label">節約</label>
      </div>
    </div>

    <div class="input-container">
      <input
        id="normal"
        @change="$emit('change', $event.target.value)"
        value="1"
        class="radio-button"
        type="radio"
        name="budget"
      />
      <div class="radio-tile">
        <div class="icon normal-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z"
            />
          </svg>
        </div>
        <label for="normal" class="radio-tile-label">普通</label>
      </div>
    </div>
    <div class="input-container">
      <input
        id="luxury"
        @change="$emit('change', $event.target.value)"
        value="2"
        class="radio-button"
        type="radio"
        name="budget"
      />
      <div class="radio-tile">
        <div class="icon luxury-icon">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path
              d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z"
            />
          </svg>
        </div>
        <label for="luxury" class="radio-tile-label">ちょいリッチ</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    budget: {
      type: Number,
      default: 0
    }
  }
}
</script>
