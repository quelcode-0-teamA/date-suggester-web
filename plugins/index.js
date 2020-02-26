// export let axios

// export default ({store, $axios}) => {
//   $axios.onRequest(config => {
//     config.headers.common['Authorization'] = `Bearer `
//     config.headers.common['Accept'] = 'application/json'
//   })

//   $axios.onResponse(response => {
//     return Promise.resolve(response)
//   })

//   $axios.onError(error => {
//     return Promise.reject(error.response)
//   })

//   axios = $axios
// }