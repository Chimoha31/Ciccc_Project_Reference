import React from "react";
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>1</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
