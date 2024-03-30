import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskId, TaskWithId } from '../../types/types'

const DEFAULT_STATE: TaskWithId[] = [
  {
    id: '1',
    title: 'Pasear al perro',
    targetDate: '2024-02-02',
    isDone: false,
    description: 'Tengo que llevarlo al veterinario para comprarle la comida.',
  },
  {
    id: '2',
    title: 'Hacer la compra',
    targetDate: '2024-02-02',
    isDone: false,
    description: 'Comprar frutas, verduras y carne.',
  },
]

const initialState = DEFAULT_STATE

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    taskCreated: (state, action: PayloadAction<Task>) => {
      const id = crypto.randomUUID()
      state.push({ id, ...action.payload })
    },
    taskUpdated: (
      state,
      action: PayloadAction<{ id: TaskId; isDone: boolean }>
    ) => {
      const task = state.find((t) => t.id === action.payload.id)
      if (task) {
        task.isDone = action.payload.isDone
      }
    },
    taskDeleted: (state, action: PayloadAction<{ id: TaskId }>) => {
      return state.filter((t) => t.id !== action.payload.id)
    },
  },
})

export default taskSlice.reducer

export const { taskCreated, taskUpdated, taskDeleted } = taskSlice.actions
