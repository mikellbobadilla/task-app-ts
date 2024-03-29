import './Header.css'

export function Header() {
  return (
    <header className="mx-auto lg:p-3 w-full max-w-5xl">
      <div className="flex justify-between items-center bg-zinc-800 lg:px-5 lg:py-5 p-3 lg:rounded-full">
        <h1 className="font-bold text-xl lg:text-2xl">Task App</h1>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-sm lg:text-base active"
                href="#"
                title="Go to list of tasks"
              >
                Tasks
              </a>
            </li>

            <li>
              <a
                className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-sm lg:text-base"
                href="#"
                title="Create a new Task"
              >
                Create Task
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
