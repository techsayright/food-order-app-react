import React from "react";
import styles from '../css/MealSummary.module.scss'

export default function MealSummary() {
  return (
    <section className={styles.MealSummary} >
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}
