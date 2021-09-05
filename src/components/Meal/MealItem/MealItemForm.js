import React, { useRef } from "react";
import styles from "../../css/MealItemForm.module.scss";

export default function MealItemForm({ id, addToCartHandler }) {
  console.log("hi i am mealform");

  const inputRef = useRef();

  const submitHandler =e=>{
    e.preventDefault()

    const quantity= inputRef.current.value;
    const quantityNum = +quantity;

    if(quantity.trim().length===0 || quantityNum<1 || quantityNum > 7){
      return
    }

    addToCartHandler(quantityNum)
  }

  return (
    <form className={styles["form-control"]} onSubmit={submitHandler}>
      <div>
        <label htmlFor={`input_${id}`}>Quantity : </label>
        <input
          ref={inputRef}
          type="number"
          defaultValue="1"
          min="1"
          max="7"
          id={`input_${id}`}
        />
      </div>

      <button type="submit">Add to Cart &nbsp;<i className='fa fa-shopping-cart'></i></button>
    </form>
  );
}
