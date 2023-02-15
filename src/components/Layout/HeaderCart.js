import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";

const HeaderCart = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <FaCartArrowDown size={30} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCart;
