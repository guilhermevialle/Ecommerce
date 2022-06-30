import "./style.scss";
import { Data } from "../../App";
import { useContext, useEffect, useState } from "react";
import CartItem from "../cartItem/cartItem";

export default ({ list }) => {
  const { thisData, setThisData } = useContext(Data);
  const { cart } = thisData;
  console.log(thisData);

  return cart ? (
    <div className="cart">
      {cart.map((item, index) => {
        return <CartItem index={index} item={item} />;
      })}
      {cart.length > 0 ? (
        <span className="payBtn">Finish payment</span>
      ) : (
        <span className="emptyCart">Empty cart</span>
      )}
    </div>
  ) : (
    false
  );
};
