import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { taskCreated } from '../service/features/slices/taskSlice'
import { Task } from '../service/types/types'
import { CheckboxText } from './CheckboxText'
import { InputText } from './InputText'
import { TextArea } from './TextArea'

export function TaskForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [errorTitle, setErrorTitle] = useState<string | null>(null)
  const [taskForm, setTaskForm] = useState<Task>({
    title: '',
    targetDate: new Date().toISOString().split('T')[0],
    isDone: false,
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (taskForm.title.trim().length === 0) {
      setErrorTitle('Title cannot be empty')
      return
    }

    if (taskForm.title.trim().length <= 3) {
      setErrorTitle('Title cannot be less than 3 characters')
      return
    }

    dispatch(taskCreated(taskForm))
    navigate('/tasks')
  }

  return (
    <>
      <h2 className="my-4 font-semibold text-xl">Create a new task</h2>
      <form className="mx-auto mt-5 w-full max-w-sm" onSubmit={handleSubmit}>
        <InputText
          label="Title"
          id="title"
          placeholder="Prepare dinner..."
          type="text"
          name="title"
          value={taskForm.title}
          onChange={handleChange}
          error={errorTitle}
        />

        <InputText
          label="Target Date"
          type="date"
          id="targetDate"
          name="targetDate"
          value={taskForm.targetDate}
          onChange={handleChange}
        />

        <CheckboxText
          label="is done"
          id="isDone"
          name="isDone"
          isChecked={taskForm.isDone}
          onUpdate={() =>
            setTaskForm((prev) => ({ ...prev, isDone: !taskForm.isDone }))
          }
        />

        <TextArea
          label="Description"
          id="Description"
          name="description"
          placeholder="Write description..."
          value={taskForm.description}
          onChange={(e) =>
            setTaskForm((prev) => ({ ...prev, description: e.target.value }))
          }
        />

        <div className="my-5">
          <button
            type="submit"
            role="button"
            className="bg-orange-300 hover:bg-orange-100 active:bg-orange-200 py-2 rounded-lg w-full font-semibold text-black transition-all outline-none"
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  )
}
