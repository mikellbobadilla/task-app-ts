import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { authencated } from '../service/features/slices/authSlice'

export function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-3 text-3xl text-red-300">Página de login</h1>
      <button
        onClick={() => {
          dispatch(
            authencated({
              username: 'sting',
              token:
                '21177cb815ec377fe8a6995859d8b5aa249044799220874004d2aaab358d1fa8976dcc2d33163d3d7b416dee8f812e59bcede796e381a99c2fa0cfe7bd24059f',
            })
          )
          navigate('/')
        }}
        className="bg-slate-800 px-4 py-1"
      >
        login
      </button>
    </>
  )
}
