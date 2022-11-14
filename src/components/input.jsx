import classNames from "classnames";
import "../style/login.css"
const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label
        style={{ color: "#bf2b7a", fontFamily: "cursive", fontSize: "20px" }}
        htmlFor={name}
      >
        {label}
      </label>
      <input style={{ background: "transparent",
    width: "400px",
    border: "none",
    borderLeft: "1px solid rgba(255,255,255,0.3)",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "5000px",
    backdropFilter:" blur(5px)",
    boxShadow: "4px 4px 60px rgba(0,0,0,0.2)",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500PX",
    transition: "all 0.2s ease-in-out",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    padding: "1em",}} class="input"
        {...rest}
        id={name}
        className= {classNames(" form-control ", { "is-invalid": error })}
       
      />
      <span className="invalid-feedback ">{error}</span>
    </div>
  );
};

export default Input;
