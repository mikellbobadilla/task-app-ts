import './CheckboxText.css'

export function CheckboxText({ label }: { label: string }) {
  return (
    <div className="flex items-center mb-5">
      <div className="checkbox-container">
        <input type="checkbox" id="cb1" />
        <label htmlFor="cb1">{label}</label>
      </div>
    </div>
  )
}
