import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      data-bs-toggle={props.dataBsToggle}
      aria-expanded={props.ariaExpanded}
    >
      {props.children}
    </button>
  );
};

export default Button;
