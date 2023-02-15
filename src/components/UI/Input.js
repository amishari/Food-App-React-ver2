import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>
        {props.label}
        <input {...props.input} ref={ref} />
      </label>
    </div>
  );
});

export default Input;
