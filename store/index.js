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
  token: 'vLDjuV1hFabyYesjmfZRS8E8'
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
