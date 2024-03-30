import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function ProtectedPages() {
  const { auth } = useAuth()

  return auth.username && auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  )
}
