export const state = () => ({
  temp_user: {
    birth_year: 1990,
    area_id: 1
  },
  formal_user: {
    email: 'email@example.com',
    password: 'password',
    password_confirmation: 'password'
  },
  user: {
    email: 'email@example.com',
    password: 'password'
  },
  suggestion: {
    id: 1,
    title: '猫カフェデート',
    description: 'にゃんことまったりしたい',
    area: '吉祥寺',
    total_budget: '3,000円',
    time: '3時間30分',
    thumb: 'URL//image/path/..',
    spots: [
      {
        id: 1,
        name: 'てまりのおうち',
        budget: '2,000円',
        time: '2時間',
        area: '吉祥寺',
        thumb: 'URL//image/path/..'
      },
      {
        id: 2,
        name: 'スターバックス',
        budget: '600円',
        time: '1時間30分',
        area: '吉祥寺',
        thumb: 'URL//image/path/..'
      }
    ]
  },
  token: 'vLDjuV1hFabyYesjmfZRS8E8',
  answers: {
    date_area: '1',
    date_budget: '2',
    date_time: '2',
    date_type: '2'
  }
})

export const actions = {
  addGender({ commit }, value) {
    commit('addGender', value)
    // console.log(value)
  },
  updateDateArea({ commit }, value) {
    commit('upDateArea', value)
  },
  updateDateBudget({ commit }, value) {
    commit('upDateBudget', value)
  },
  updateDateTime({ commit }, value) {
    commit('upDateTime', value)
  },
  updateDateType({ commit }, value) {
    commit('upDateType', value)
  }
}
export const mutations = {
  addGender(state, value) {
    state.user.gender = value
  },
  updateDateArea(state, value) {
    state.answers.date_area = value
  },
  updateDateBudget(state, value) {
    state.answers.date_budget = value
  },
  updateDateTime(state, value) {
    state.answers.date_time = value
  },
  updateDateType(state, value) {
    state.answers.date_type = value
  }
}
export const getters = {}
