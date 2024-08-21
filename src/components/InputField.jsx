import "../styles/InputField.css";

const InputField = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
      name={name}
    />
  );
};

export default InputField;
