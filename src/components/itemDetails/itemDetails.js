// import "./style.scss";
import { Data } from "../../App";
import { useContext, useState } from "react";
import "./style.scss";

export default ({ item }) => {
  const { thisData, setThisData } = useContext(Data);
  const { cart } = thisData;
  const [targetImage, setTargetImage] = useState(item.thumbnail);

  const rmClass = (e, name) => {
    return e.currentTarget.classList.remove(name);
  };

  return item ? (
    <div className="itemDetails">
      <div className="productContent">
        <div className="lside">
          <div className="activeImg"></div>
          <div className="mainImg">
            <img
              src={targetImage}
              className="loading"
              onLoad={(e) => rmClass(e, "loading")}
            />
          </div>
          <div className="images">
            {item.images.map((e) => {
              return (
                <img
                  className="loading"
                  onClick={(e) => {
                    let l = e.currentTarget.offsetLeft;
                    let w = e.currentTarget.offsetWidth;

                    let ai = document.querySelector(".activeImg");
                    ai.style.left = l + "px";
                    ai.style.width = w + "px";

                    setTargetImage(e.currentTarget.src);
                  }}
                  src={e}
                  onLoad={(e) => rmClass(e, "loading")}
                />
              );
            })}
          </div>
        </div>
        <div className="rside">
          <div className="info">
            <div className="title">
              <h2>{item.title}</h2>
            </div>
            <div className="rating">
              <h3>{item.rating}</h3>
            </div>
            <div className="datasheet">
              <span>Datasheet </span>
            </div>
          </div>
          <div className="payment">
            <div className="price">
              <h1>{item.discountPercentage}% OFF</h1>
              <h1>
                at $
                {(
                  item.price -
                  (item.price * item.discountPercentage) / 100
                ).toFixed(2)}
              </h1>
            </div>
            <div className="color"></div>
            <div className="quantity"></div>

            <div className="payBtns">
              <button>Buy now</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Invalid URL request. 404 Error.</h1>
  );
};
