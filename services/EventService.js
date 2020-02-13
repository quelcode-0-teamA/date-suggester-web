import axios from 'axios'

const apiDate = axios.create({
  baseURL: `https://api-date-suggester-dev.herokuapp.com`,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  apiDate
}
