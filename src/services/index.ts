import env from '@/config/env'
import axios from 'axios'

const api = axios.create({
  baseURL: `${env.serverURLApi}`,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 15000,
})

export default api
