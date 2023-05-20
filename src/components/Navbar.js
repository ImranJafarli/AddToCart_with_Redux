import React from "react";
import { Link } from "react-router-dom";


import "../styled/navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cartData.cart)

  const sumAllProducts = cart.map((item) => {
    return item.quantity * item.price;
  });
  const sumPrice = sumAllProducts.reduce((prev, current) => prev + current, 0);
  const allQuantity = cart.map((item) => {
    return item.quantity;
  });
  const sumQuantity = allQuantity.reduce((prev, current) => prev + current, 0);

  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart {sumQuantity}Summary {sumPrice}
            </Link>
          </li>
          <li>
            <Link to="/create-product">Create</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
