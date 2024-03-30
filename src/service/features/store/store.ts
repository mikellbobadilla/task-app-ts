import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slices/authSlice'
import taskSlice from '../slices/taskSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
    auth: authSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
