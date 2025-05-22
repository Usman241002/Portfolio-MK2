import "./TextInput.css";

export default function TextInput({ label }) {
  return (
    <div className="text-input">
      <label htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input type="text" id={label} name={label} />
    </div>
  );
}
