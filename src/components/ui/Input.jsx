
export default function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  textarea = false,
  rows = 4,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>

      {textarea ? (
        <textarea
          className="form-control min-h-28 resize-y"
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          className="form-control"
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}
