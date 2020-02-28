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
  token: '',
  answers: {
    date_area: null,
    date_budget: null,
    date_time: null,
    date_type: null
  }
})

export const actions = {
  addGender({ commit }, value) {
    commit('ADD_GENDER', value)
    // console.log(value)
  }
  // updateDateArea({ commit }, value) {
  //   commit('UPDATE_DATE_AREA', value)
  // },
  // updateDateBudget({ commit }, value) {
  //   commit('UPDATE_DATE_BUDGET', value)
  // },
  // updateDateTime({ commit }, value) {
  //   commit('UPDATE_DATE_TIME', value)
  // },
  // updateDateType({ commit }, value) {
  //   commit('UPDATE_DATE_TYPE', value)
  // }
}
export const mutations = {
  ADD_GENDER(state, value) {
    state.user.gender = value
  },
  UPDATE_DATE_AREA(state, value) {
    state.answers.date_area = value
  },
  UPDATE_DATE_BUDGET(state, value) {
    state.answers.date_budget = value
  },
  UPDATE_DATE_TIME(state, value) {
    state.answers.date_time = value
  },
  UPDATE_DATE_TYPE(state, value) {
    state.answers.date_type = value
  },
  UPDATE_TOKEN(state, value) {
    state.token = value
  }
}
export const getters = {
  qParams(state) {
    return `?date_area=${state.answers.date_area}&date_budget=${state.answers.date_budget}&date_time=${state.answers.date_time}&date_type=${state.answers.date_type}`
  }
}
