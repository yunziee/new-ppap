import "../styles/Checkbox.css";

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
