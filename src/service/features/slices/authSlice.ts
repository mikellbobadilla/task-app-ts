import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Auth } from '../../types/types'

const DEFAULT_STATE: Auth = {
  username: null,
  token: null,
}

const initialState = (() =>
  JSON.parse(localStorage.getItem('___REDUX__AUTH___') as string) ||
  DEFAULT_STATE)()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authencated: (
      state,
      action: PayloadAction<{ username: string; token: string }>
    ) => {
      const { username, token } = action.payload
      state.username = username
      state.token = token
      state = { ...state }
      localStorage.setItem('___REDUX__AUTH___', JSON.stringify(state))
    },
    logout: (state) => {
      state.username = null
      state.token = null
      localStorage.removeItem('___REDUX__AUTH___')
    },
  },
})

export default authSlice.reducer

export const { authencated, logout } = authSlice.actions
