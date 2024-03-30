export interface Task {
  title: string
  description: string
  targetDate: string
  isDone: boolean
}

export type TaskId = string

export interface TaskWithId extends Task {
  id: TaskId
}

export interface Auth {
  username: string | null
  token: string | null
}
