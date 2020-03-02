<template>
  <div class="root-div">
    <div class="content">
      <div class="inner">
        <div class="question">
          <v-form>
            <v-select
              :items="yearOptions"
              :value="yearOptions"
              v-model="birth_year"
              outlined
              label="あなたの生まれた年を選んでください"
            ></v-select>
            <v-select
              :items="areas"
              v-model="area"
              item-text="name"
              item-value="id"
              outlined
              return-object
              label="お住まいの地域を選んでください"
            ></v-select>
            <!-- <multiselect
              :options="yearOptions"
              v-model="birth_year"
            ></multiselect>
            <multiselect
              v-model="area_id"
              :options="areas"
              :allow-empty="false"
              track-by="id"
              label="name"
              placeholder="お住まいの地域を選んでください"
            ></multiselect> -->
          </v-form>
        </div>
        <v-btn @click="setToken" rounded class="elevation-0"
          >質問に回答する</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
// import Multiselect from 'vue-multiselect'
export default {
  components: {
    // Multiselect
  },
  data() {
    return {
      birth_year: null,
      area: {}
    }
  },
  computed: {
    yearOptions() {
      const years = []
      for (let i = 1965; i < 2005; i++) {
        years.push(i)
      }
      return years
    },
    areaName() {
      const areaName = []
      for (let i = 0; i < this.areas.length; i++) {
        areaName.push(this.areas[i].name)
      }
      return areaName
    },
    areaId() {
      const areaId = []
      for (let i = 0; i < this.areas.length; i++) {
        areaId.push(this.areas[i].id)
      }
      return areaId
    }
  },
  asyncData({ $axios }) {
    return $axios.$get('areas').then((response) => {
      // console.log(response)
      return {
        areas: response
      }
    })
  },
  methods: {
    // tempSignup() {
    //   this.$axios
    //     .$post('temp_sign_up', {
    //       temp_user: {
    //         birth_year: this.birth_year,
    //         area_id: this.area.id
    //       }
    //     })
    //     .then((response) => {
    //       console.log(response, 'hosii')
    //       this.$store.commit('UPDATE_TOKEN', response.token)
    //       console.log(this.$store.state.token)
    //       this.$router.push('/questions2')
    //     })
    // tokenをstoreに入れたけどcookieで扱う必要あり？
    // },
    // async tempsignup() {
    // const registrationinfo = {temp_user: {
    //   birth_year: this.birth_year,
    //   area_id: this.area.id
    // }}
    //   await this.$axios.$post('temp_sign_up', {
    //     temp_user: {
    //       birth_year: this.birth_year,
    //       area_id: this.area.id
    //     }
    //   })
    //   this.$auth.loginWith('localtemp', {
    //     data: {
    //       temp_user: {
    //         birth_year: this.birth_year,
    //         area_id: this.area.id
    //       }
    //     }
    //   })
    // }
    setToken() {
      this.$axios
        .$post('temp_sign_up', {
          temp_user: {
            birth_year: this.birth_year,
            area_id: this.area.id
          }
        })
        .then((response) => {
          // console.log(response)
          this.$cookies.set('datetoken', response.token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
          // this.$auth.setUserToken(response.token)
          // this.$auth.loginWith('local', {
          //   temp_user: {
          //     birth_year: this.birth_year,
          //     area_id: this.area.id
          //   }
          // })
          this.$router.push('questions2')
        })
    }
  },
  middleware(context) {
    // console.log(context.app.store.$cookies.get('datetoken'))
    const dateToken = context.app.store.$cookies.get('datetoken')
    if (dateToken) {
      return context.redirect('/questions2')
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
