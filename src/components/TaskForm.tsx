import { CheckboxText } from './CheckboxText'
import { InputText } from './InputText'
import { TextArea } from './TextArea'

export function TaskForm() {
  return (
    <>
      <h2 className="my-4 font-semibold text-xl">Create a new task</h2>
      <form className="mx-auto mt-5 w-full max-w-sm">
        <InputText
          label="Title"
          id="title"
          placeholder="Prepare dinner..."
          type="text"
          name="title"
        />

        <InputText
          label="Target Date"
          type="date"
          id="targetDate"
          name="targetDate"
        />

        <CheckboxText label="is done" />

        <TextArea
          label="Description"
          id="Description"
          name="description"
          placeholder="Write description..."
        />
      </form>
    </>
  )
}
