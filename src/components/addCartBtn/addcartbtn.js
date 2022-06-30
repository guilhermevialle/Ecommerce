import { Data } from "../../App";
import { useContext } from "react";

export default ({ item }) => {
  const { thisData, setThisData } = useContext(Data);
  const { cart } = thisData;

  return (
    <button
      onClick={() => {
        if (cart.indexOf(item) == -1) {
          return setThisData({
            type: "UPDATE-CART",
            value: [...cart, item],
          });
        }
      }}
    >
      Add to cart
    </button>
  );
};
