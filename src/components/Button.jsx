import "../styles/Button.css";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
