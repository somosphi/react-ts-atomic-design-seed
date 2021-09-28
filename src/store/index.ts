import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import { authReducer, exampleModal } from './ducks'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    exampleModal,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
