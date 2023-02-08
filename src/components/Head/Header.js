import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import mealImg from "../../asset/meal.jpg";

export default function Header() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const AvailableMeal = () => {
    const Meals = DUMMY_MEALS.map((item) => (
      <li className={classes.meal}>
        <div>
          <h3>{item.name}</h3>
          <div className={classes.description}>{item.description}</div>
          <div className={classes.price}>{`$${item.price}`}</div>
        </div>
        <div>
          <form className={classes.form}>
            <input
              type="number"
              min="1"
              max="5"
              step="1"
              label="amount"
              defaultValue="0"
            />

            <button>+Add</button>
          </form>
        </div>
      </li>
    ));
    return (
      <section className={classes.meals}>
        <ul>{Meals}</ul>
      </section>
    );
  };
  const MealSummary = () => {
    return (
      <div className={classes.summary}>
        <h3>Choose from best ingredients</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          rerum blanditiis neque laudantium, maxime laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nihil
          vitae. Odio sunt deserunt aliquam. Quibusdam error corrupti ipsum,
        </p>
      </div>
    );
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Online shop</h1>
        <HeaderCart />
      </header>
      <div className={classes["img-container"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
}
