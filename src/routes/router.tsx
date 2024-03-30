import { createBrowserRouter } from 'react-router-dom'
import { ListOfTasks } from '../components/ListOfTasks'
import { TaskForm } from '../components/TaskForm'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { ProtectedPages } from '../pages/ProtectedPage'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedPages />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            index: true,
            element: <ListOfTasks />,
          },
          {
            path: 'create-task',
            element: <TaskForm />,
          },
        ],
      },
    ],
  },
])
