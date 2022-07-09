import React from "react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image} src="https://images.baxterboo.com/global/images/products/medium/mom-tattoo-dog-shirt-gray-6299.jpg" alt="T-shirt" />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>Dog T-shirt</p>
        <p className={styles.details__desc}>This is cute dog t-shirt!</p>
        <p className={styles.details__price}>$ 16.20</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" />
        </div>
        <button className={styles.actions__deleteItemBtn}>
          <img
            src=""
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
