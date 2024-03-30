import './TextArea.css'

export function TextArea({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string
  id: string
  name?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="hover:border-orange-400 focus:border-orange-300 bg-zinc-800 p-2 border border-transparent rounded-lg text-sm caret-orange-200 outline-none"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder + '\n\n'}
      ></textarea>
    </div>
  )
}
