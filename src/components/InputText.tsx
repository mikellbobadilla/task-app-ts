export function InputText({
  label,
  type = 'text',
  id,
  placeholder,
  value,
  error,
  onChange,
  name,
}: {
  label: string
  type: 'text' | 'date'
  id: string
  placeholder?: string
  value?: string
  error?: string | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}) {
  const errorStyle = error ? 'border-red-400' : 'border-transparent'

  return (
    <div className="flex flex-col gap-1 mb-5">
      <label htmlFor={id}>{label}</label>
      <input
        className={`hover:border-orange-400 w-full focus:border-orange-300 bg-zinc-800 px-2 py-3 border ${errorStyle} rounded-md text-sm transition-all caret-orange-200 outline-none`}
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  )
}
