import { useMemo } from 'react'
import { useAppSelector } from './hooks'

export function useAuth() {
  const auth = useAppSelector((state) => state.auth)
  return useMemo(() => ({ auth }), [auth])
}
