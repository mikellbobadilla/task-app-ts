import { createBrowserRouter, redirect } from 'react-router-dom'
import { ListOfTasks } from '../components/ListOfTasks'
import { TaskForm } from '../components/TaskForm'
import { IndexPage } from '../pages/IndexPage'

export const router = createBrowserRouter([
  {
    path: '/',
    loader: ({ request }) => {
      const url = new URL(request.url)
      if (url.pathname === '/') return redirect('/tasks')
      return null
    },
    element: <IndexPage />,
    children: [
      {
        index: true,
        path: 'tasks',
        element: <ListOfTasks />,
      },
      {
        path: 'create-task',
        element: <TaskForm />,
      },
    ],
  },
])
