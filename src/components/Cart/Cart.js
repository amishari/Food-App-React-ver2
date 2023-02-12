import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

<<<<<<< HEAD
const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 3, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
=======
const Cart = ({onClose}) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>
          {item.name} 
        </li>
>>>>>>> dc4285bc1e7d54dbc155d5ae7c95226ea5639394
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
<<<<<<< HEAD
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
=======

        <button className={classes["button--alt"]} onClick={onClose}>Close</button>

>>>>>>> dc4285bc1e7d54dbc155d5ae7c95226ea5639394
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
