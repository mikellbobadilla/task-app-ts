import { NavLink } from 'react-router-dom'
import './Header.css'

export function Header() {
  return (
    <header className="top-0 right-0 left-0 z-10 fixed mx-auto lg:p-3 w-full max-w-5xl h-16">
      <div className="flex justify-between items-center bg-zinc-800 shadow lg:px-5 lg:py-5 p-3 lg:rounded-full">
        <h1 className="font-bold text-xl lg:text-2xl">Task App</h1>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-sm lg:text-base transition-all"
                to="/tasks"
                title="Go to list of tasks"
              >
                Tasks
              </NavLink>
            </li>

            <li>
              <NavLink
                className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-sm lg:text-base transition-all"
                to="/create-task"
                title="Create a new Task"
              >
                Create Task
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
