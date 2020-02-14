export const state = () => ({
  user: {
    name: null,
    birth_year: null,
    gender: null,
    area_id: null,
    email: null,
    password: null,
    password_confirmation: null
  }
})

export const actions = {
  addGender({ commit }, value) {
    commit('addGender', value)
    // console.log(value)
  }
}
export const mutations = {
  addGender(state, value) {
    state.user.gender = value
  }
}
export const getters = {}
