import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label>
        {label}
        <input {...input} ref={ref} />
      </label>
    </div>
  );
});

export default Input;
