import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '../slices/taskSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
