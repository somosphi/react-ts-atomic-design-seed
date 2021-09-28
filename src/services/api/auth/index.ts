import api from '@/services'

export const authenticate = (email: string, password: string) =>
  api.post('/login', { email, password })
