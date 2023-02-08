import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>
        {props.label}
        <input {...props.input} />
      </label>
    </div>
  );
};

export default Input;
