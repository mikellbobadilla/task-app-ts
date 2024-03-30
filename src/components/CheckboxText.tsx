import './CheckboxText.css'

export function CheckboxText({
  label,
  isChecked,
  onUpdate,
  name,
  id,
}: {
  label: string
  isChecked?: boolean
  onUpdate?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
}) {
  return (
    <div className="flex items-center mb-5">
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked}
          onChange={onUpdate}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  )
}
