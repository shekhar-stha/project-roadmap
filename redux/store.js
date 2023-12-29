import { configureStore } from '@reduxjs/toolkit'
import userAuth from './slices/userAuth'
import loading from './slices/loading'
import developersSlice from './slices/developersSlice'
import supportAssistantSlice from './slices/supportAssistantSlice'
import announcementSlice from './slices/announcementSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        user: userAuth,
        loading: loading,
        developers: developersSlice,
        supportAssistants: supportAssistantSlice,
        announcements: announcementSlice,
    }
  })
}