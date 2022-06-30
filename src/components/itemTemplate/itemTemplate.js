import "./style.scss";
import { useNavigate } from "react-router-dom";
import sale from "../../sale.png";
import AddCart from "../addCartBtn/addcartbtn";

export default ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="itemTemplate"
      onClick={(e, index) => {
        return navigate(`/products:${item.id}`);
      }}
    >
      <div className="thumbnail">
        <img
          className="loading"
          onLoad={(e) => e.currentTarget.classList.remove("loading")}
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      <div className="title">
        <h4>
          {item.title.length > 11
            ? item.title.split("").splice(0, 15).join("").trim() + "..."
            : item.title + "..."}
        </h4>
        <h4>{item.brand}</h4>
      </div>

      <div className="price">
        <h3>
          {item.discountPercentage > 0 ? (
            <span>
              <span
                style={{ textDecoration: "line-through", color: "#b4b4b450" }}
              >
                {"$" + item.price + ",00  "}
              </span>
              <img
                style={{
                  width: "12px",
                  margin: "0 4px",
                  filter: "invert(100%)",
                }}
                src={sale}
              />
              $
              {(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}
            </span>
          ) : (
            <span>{"$" + item.price + ",00"}</span>
          )}
        </h3>
      </div>

      <div className="description">
        <span>{item.description.split("").splice(0, 42).join("") + "..."}</span>
      </div>

      <div className="rating">
        <span>{item.rating} / 5</span>
      </div>
    </div>
  );
};
