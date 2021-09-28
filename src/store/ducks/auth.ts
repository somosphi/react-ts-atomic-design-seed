import { createSlice } from '@reduxjs/toolkit'
import { getStorage, setStorage, clearStorage } from '@/services/storage'
import { AppDispatch, AppThunk } from '..'

// Actions
// const SET_AUTH = 'auth/SET_AUTH'
// const LOGIN = 'auth/LOGIN'
// const LOGOUT = 'auth/LOGOUT'

// initial state
const user = getStorage('user')

// const initialState = {
//   token: 'teste',
//   isAuthed: !!getStorage('isAuthed'),
//   isLogged: false,
//   id: user.id,
//   firstName: user.firstName,
//   email: user.email,
// }

// export const setAuth = createAction('auth/SET_AUTH')
// export const login = createAction('auth/LOGIN')
// export const logout = createAction('auth/LOGOUT')

const store = createSlice({
  name: 'auth',
  initialState: {
    token: 'teste',
    isAuthed: !!getStorage('isAuthed'),
    isLogged: false,
    id: 'user.id',
    firstName: 'user.firstName',
    email: 'user.email',
    jwtToken: 'adasd',
  },
  reducers: {
    setAuth(state) {
      setStorage('isAuthed', true)
      state.isAuthed = true
      state.isLogged = true
    },
    login(state) {
      // state = {}
      // state.id =
      //     id: state.id,
      //     firstName: state.firstName,
      //     email: state.email,
      setStorage('token', state.jwtToken)
      setStorage('user', user)
      // return {
      //   type: LOGIN,
      //   payload: user,
      // }
    },
    logout(state) {
      clearStorage('token')
      clearStorage('user')
      clearStorage('isAuthed')
    },
  },
})

export function asyncExample(): AppThunk {
  return function (dispatch: AppDispatch) {
    // async function to run
  }
}

export const { setAuth, login, logout } = store.actions

export default store.reducer

//reducer
// export default createReducer(initialState, {
//   [setAuth.type]: (state, {type, payload}) => ({ isAuthed: true, isLogged: true, ...payload })
//   [login.type]: (state, {type, payload}) => ({ isAuthed: true, isLogged: true, ...payload })
//   [logout.type]: (state, {type, payload}) => ({
//             token: null,
//             isAuthed: false,
//             firstName: ' ',
//             lastName: ' ',
//             id: '',
//           })
// })

// export default function authReducer(
//   state = initialState,
//   { type, payload }: ReducerState,
// ) {
//   switch (type) {
//     case LOGIN:
//       return { isAuthed: false, ...payload }
//     case SET_AUTH:
//       return { isAuthed: true, isLogged: true, ...payload }
//     case LOGOUT:
//       return {
//         token: null,
//         isAuthed: false,
//         firstName: ' ',
//         lastName: ' ',
//         id: '',
//       }
//     default:
//       return state
//   }
// }

// action creators
// export const setAuth = () => {
//   setStorage('isAuthed', true)
//   return {
//     type: SET_AUTH,
//   }
// }

// export const login = (data: any) => {
//   const user = {
//     id: data.id,
//     firstName: data.firstName,
//     email: data.email,
//   }
//   setStorage('token', data.jwtToken)
//   setStorage('user', user)
//   return {
//     type: LOGIN,
//     payload: user,
//   }
// }

// export const logout = () => {
//   clearStorage('token')
//   clearStorage('user')
//   clearStorage('isAuthed')
//   return {
//     type: LOGOUT,
//   }
// }
