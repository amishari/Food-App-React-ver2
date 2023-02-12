import React from "react";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";

const HeaderCart = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <div>
      <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
          <FaCartArrowDown size={30} />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};
export default HeaderCart;
