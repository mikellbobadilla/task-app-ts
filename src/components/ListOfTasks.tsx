import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { taskDeleted, taskUpdated } from '../service/features/slices/taskSlice'
import { TaskWithId } from '../service/types/types'

export function ListOfTasks() {
  const listOfTasks = useAppSelector((state) => state.task)

  return (
    <>
      <h2 className="text-xl lg:text-2xl">List of Tasks</h2>
      {listOfTasks.length === 0 ? (
        <EmptyTasks />
      ) : (
        <Tasks tasks={listOfTasks} />
      )}
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

function Tasks({ tasks }: { tasks: TaskWithId[] }) {
  const dispatch = useAppDispatch()

  return (
    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
      {tasks.map(({ id, title, targetDate, isDone, description }) => (
        <li className="bg-zinc-800 p-3 rounded-lg" key={id}>
          <h5 className="mb-1 text-blue-300 text-lg text-pretty">{title}</h5>
          <p className="mb-3 text-xs">
            Target date: <span>{targetDate}</span>
          </p>
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => dispatch(taskUpdated({ id, isDone: !isDone }))}
              id={id}
              className="cursor-pointer accent-orange-300 size-4"
            />
            <label htmlFor={id} className="ml-1 text-sm cursor-pointer">
              {isDone ? 'Done' : 'Not Done'}
            </label>
          </div>
          <p className="mb-6 text-balance text-sm">{description}</p>

          <div className="flex items-center gap-4">
            <button
              aria-label="Delete task"
              type="button"
              role="button"
              className="bg-orange-300 px-4 py-2 rounded-lg text-black"
              onClick={() => dispatch(taskDeleted({ id }))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
