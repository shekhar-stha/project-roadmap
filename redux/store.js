import { configureStore } from '@reduxjs/toolkit'
import userAuth from './slices/userAuth'
import loading from './slices/loading'

export const makeStore = () => {
  return configureStore({
    reducer: {
        user: userAuth,
        loading: loading
    }
  })
}