<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <div v-for="date in dates" class="suggest__list">
          <div class="suggest__list-item">
            <img :src="date.thumb" />
          </div>
          <div class="suggest__list-item">
            <p>{{ date.title }}</p>
            <v-chip label
              ><v-icon left>mdi-map-marker</v-icon>{{ date.area }}</v-chip
            >
            <br />
            <v-chip label
              ><v-icon left>mdi-calendar-blank</v-icon>{{ date.day }}</v-chip
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [
        {
          id: 1,
          title: 'カワウソふれあいデート',
          area: '上野',
          thumb: 'https://thats-poker.net/wp-content/uploads/2016/04/a-11.jpg',
          day: '2020年2月20日'
        },
        {
          id: 2,
          title: 'カフェめぐり',
          area: '新宿',
          thumb: 'https://thats-poker.net/wp-content/uploads/2016/04/a-11.jpg',
          day: '2020年2月10日'
        }
      ]
    }
  }
}
</script>

<style></style>
