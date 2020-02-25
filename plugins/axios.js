export default function({ $axios }, inject) {
  const api = $axios.create({
    baseURL: `https://api-date-suggester-dev.herokuapp.com`,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  inject('api', api)
}
