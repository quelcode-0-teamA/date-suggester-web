<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <div v-for="myplan in myplans" class="suggest__list">
          <nuxt-link
            :to="{ name: 'myplans-id', params: { id: myplan.plan.id } }"
          >
            <div class="d-flex">
              <div>
                <img :src="dates[0].thumb" class="img" />
              </div>
              <div class="suggest__list-item">
                <p>{{ myplan.plan.title }}</p>
                <v-chip label
                  ><v-icon left>mdi-map-marker</v-icon
                  >{{ myplan.plan.area }}</v-chip
                >
                <br />
                <v-chip label
                  ><v-icon left>mdi-currency-usd</v-icon
                  >{{ myplan.plan.total_budget }}</v-chip
                >
                <br />
                <v-chip label
                  ><v-icon left>mdi-calendar-blank</v-icon
                  >{{ myplan.plan.day }}</v-chip
                >
              </div>
            </div>
          </nuxt-link>
          <!-- <v-btn
            :to="{ name: 'myplans-id', params: { id: `${myplan.plan.id}` } }"
            class="suggest__list-item"
          ></v-btn> -->
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
  },
  asyncData({ $axios, app }) {
    const dateToken = app.$cookies.get('datetoken')
    return $axios
      .$get('mypage/my_plans', {
        headers: {
          Authorization: 'Bearer ' + dateToken
        }
      })
      .then((response) => {
        console.log(response)
        return {
          myplans: response
        }
      })
  }
  // asyncData({ $axios, app }) {
  //   const dateToken = app.$cookies.get('datetoken')
  //   return $axios
  //     .$get('mypage/my_plans', {
  //       Authorization: 'Bearer ' + dateToken
  //     })
  //     .then((response) => {
  //       console.log(response)
  //       return {
  //         myplans: response
  //       }
  //     })
  // }
}
</script>

<style></style>
