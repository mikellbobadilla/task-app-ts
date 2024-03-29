import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import './IndexPage.css'

export function IndexPage() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-16 lg:mt-[92px] p-3 w-full max-w-5xl">
        <Outlet />
      </main>
    </>
  )
}
