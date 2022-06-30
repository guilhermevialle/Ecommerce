import ItemDetails from "../components/itemDetails/itemDetails";
import Products from "../server/products.json";
import Navbar from "../components/navbar/navbar";
import { useEffect } from "react";

export default () => {
  var item;
  var UrlID = window.location.href;
  UrlID = UrlID.split("")
    .reverse()
    .splice(0, UrlID.split("").reverse().indexOf(":"));
  UrlID = UrlID.reverse().join("");
  UrlID = Number(UrlID) - 1;

  item = Products.products[Number(UrlID)];

  return (
    <div className="productDetail">
      <Navbar />;
      <ItemDetails item={item} />
    </div>
  );
};
