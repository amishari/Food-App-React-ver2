import classes from "./Input.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label>
        {label}
        <input {...input} />
      </label>
    </div>
  );
};

export default Input;
