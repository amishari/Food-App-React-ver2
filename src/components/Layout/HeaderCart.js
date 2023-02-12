import React from "react";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";

<<<<<<< HEAD
const HeaderCart = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
=======
const HeaderCart = ({onClick}) => {
>>>>>>> dc4285bc1e7d54dbc155d5ae7c95226ea5639394
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
