import { useState, useContext } from "react";
import { Data } from "../../App";
import cart from "../cart/cart";

export default ({ item, index }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const { thisData, setThisData } = useContext(Data);
  var { cart } = thisData;

  return (
    <div className="cartItem">
      <div>
        <img src={item.thumbnail} />
      </div>
      <div>
        <span>{item.title}</span>
      </div>
      <div>
        <button
          className="more"
          onClick={() => {
            setItemQuantity((prev) => prev + 1);
          }}
        >
          <i class="gg-math-plus"></i>
        </button>
        <span> {itemQuantity} </span>
        <button
          className="minus"
          onClick={() => {
            if (itemQuantity == 1) {
              return;
            }

            setItemQuantity((prev) => prev - 1);
          }}
        >
          <i class="gg-math-minus"></i>
        </button>
      </div>
      <div>
        <span>
          $
          {(
            (item.price - (item.price * item.discountPercentage) / 100) *
            itemQuantity
          ).toFixed(2)}
        </span>
      </div>
      <div>
        <span
          onClick={() => {
            if (index == 0) {
              cart.shift();
            } else {
              cart = cart.filter((e, i) => i != index);
            }

            setThisData({
              type: "UPDATE-CART-PRODUCT",
              value: cart,
            });
          }}
        >
          <i class="gg-remove"></i>
        </span>
      </div>
    </div>
  );
};
