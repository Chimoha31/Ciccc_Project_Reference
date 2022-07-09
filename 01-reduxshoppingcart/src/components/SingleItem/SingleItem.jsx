import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src="https://images-na.ssl-images-amazon.com/images/I/81wesMu59KL._AC._SR360,460.jpg"
        alt="Item"
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>Dog T-shirt</p>
        <p className={styles.details__description}>This is very Cute t-shirt!</p>
        <p className={styles.details__price}>$ 22.30</p>

        <button className={styles.details__addBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
