import { Link } from 'react-router-dom'

export function ListOfTasks() {
  const listOfTasks = []

  return (
    <>
      <h2 className="text-xl lg:text-2xl">List of Tasks</h2>
      {listOfTasks.length === 0 ? <EmptyTasks /> : <Tasks />}
    </>
  )
}

function EmptyTasks() {
  return (
    <div className="flex justify-center items-center mt-6">
      <p className="text-center text-gray-600 text-xl">
        No Tasks. Create a{' '}
        <Link
          to="/create-task"
          className="text-orange-300 hover:underline transition-all"
        >
          new task
        </Link>
        .
      </p>
    </div>
  )
}

function Tasks() {
  return (
    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
      <li className="bg-zinc-800 p-3 rounded-lg">
        <h5 className="mb-1 text-blue-300 text-lg text-pretty">Task title</h5>
        <p className="mb-3 text-xs">
          Target date: <span>2024-02-02</span>
        </p>
        <p className="mb-6 text-balance text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          expedita repellat similique nulla corrupti quibusdam voluptas tempore
          qui accusamus explicabo ipsum perferendis, et quos sit quas beatae
          earum magnam error?
        </p>

        <div className="flex items-center gap-4">
          <button
            aria-label="Delete task"
            type="button"
            role="button"
            className="bg-orange-300 px-4 py-2 rounded-lg text-black"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  )
}
