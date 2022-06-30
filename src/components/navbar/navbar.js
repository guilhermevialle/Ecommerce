import "./style.scss";
import { Data } from "../../App";
import { useContext, useState } from "react";
import Logotipo from "../../logo.png";
import Cart from "../cart/cart";
import { Link, useNavigate } from "react-router-dom";
import gsap, { Expo, Power2 } from "gsap";

export default () => {
  const { thisData, setThisData } = useContext(Data);
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logotipo} />
        </Link>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search product"
          name="search"
          id="search"
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              return navigate("/all-products");
            }
          }}
          onChange={(e) => {
            let val = e.target.value;
            setThisData({
              type: "UPDATE-SEARCH-INPUT",
              value: val,
            });
          }}
        />
      </div>
      <ul className="menu">
        <div
          className="productsBtn align"
          onClick={() => navigate("/all-products")}
        >
          <span>Products</span>
        </div>
        <div
          className="cartBtn align"
          onClick={() => {
            let cart = document.querySelector(".cart");
            if (cart.style.opacity == 1) {
              cart.style.top = "5%";
              cart.style.opacity = 0;
              return;
            }

            cart.style.top = "8%";
            cart.style.opacity = 1;
          }}
        >
          <span>
            <a>Cart</a>
          </span>
        </div>
        <Cart />
      </ul>
    </div>
  );
};
