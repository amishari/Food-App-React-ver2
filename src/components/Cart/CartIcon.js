import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import classes from "./HeaderCart.module.css";

const CartIcon = () => {
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.icon}>
          <FaCartArrowDown size={30} />
        </span>
        <span>Your</span>
        <span className={classes.badge}>3</span>
      </button>
    </div>
  );
};
export default CartIcon;
