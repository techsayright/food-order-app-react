import React, { Fragment, useContext } from "react";
import cartContext from "../../../store/cart-context";
import styles from "../../css/MealItem.module.scss";
import MealItemForm from "./MealItemForm";

export default function MealItem({id ,item, des, price }) {
  console.log("hi i am mealItem");
  const cartCtx = useContext(cartContext) 

  const addToCartHandler = qt=>{
    cartCtx.addItems({
      id: id,
      item: item,
      quantity:qt,
      price: price
    })
  }

  return (
    <Fragment>
      <li className={styles.MealItem}>
      <div>
        <h3>{item}</h3>
        <div className={styles.description}>{des}</div>
        <div className={styles.price}>Rs.{price}/-</div>
      </div>
      <div>
        <MealItemForm id={id} addToCartHandler={addToCartHandler}/>
      </div>
    </li>
      <hr />
    </Fragment>
  );
}
