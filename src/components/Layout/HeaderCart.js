import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import classes from "./HeaderCart.module.css";

const HeaderCart = ({onClick}) => {
  return (
    <div>
      <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
          <FaCartArrowDown size={30} />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </div>
  );
};
export default HeaderCart;
