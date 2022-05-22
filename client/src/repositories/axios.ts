import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.REACT_APP_ORIGIN || '*',
  },
})

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject(error)
    } else {
      return Promise.reject({ message: 'Something went wrong' })
    }
  }
)
