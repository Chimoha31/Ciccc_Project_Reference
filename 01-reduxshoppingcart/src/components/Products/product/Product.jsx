import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src="https://cdn.shopify.com/s/files/1/1631/4135/products/SD-Good-Dog-Coral-FRONT_300x.jpg?v=1647954951"
        alt="item"
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>Dog t-shirt</p>
        <p className={styles.details__desc}>This is a t-shirt with dog picture</p>
        <p className={styles.details__price}>$ 15.20</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/1`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
            View Item
          </button>
        </Link>
        <button className={`${styles.buttons__btn} ${styles.buttons__add}`}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
