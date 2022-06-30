import "./routestyle.scss";
import React, { useState, useEffect, useContext } from "react";
import ItemsContent from "../components/itemsContent/itemsContent";
import Products from "../server/products.json";
import Navbar from "../components/navbar/navbar";
import { Data } from "../App";

export default () => {
  const [productsData, setProductsData] = useState([]);
  const { thisData, setThisData } = useContext(Data);
  const { searchInput } = thisData;

  var categories = Products.products.map((p) => p.category);
  categories = [...new Set(categories)];

  useEffect(() => {
    let filter = Products.products.filter((e) => {
      return (
        e.title
          .toLowerCase()
          .replace(" ", "")
          .indexOf(searchInput.toLowerCase()) != -1 ||
        e.description
          .toLowerCase()
          .replace(" ", "")
          .indexOf(searchInput.toLowerCase()) != -1 ||
        e.category
          .toLowerCase()
          .replace(" ", "")
          .indexOf(searchInput.toLowerCase()) != -1 ||
        e.brand
          .toLowerCase()
          .replace(" ", "")
          .indexOf(searchInput.toLowerCase()) != -1
      );
    });

    setProductsData(filter);
  }, [searchInput]);

  return (
    <div className="listproducts">
      <Navbar />
      <div className="select">
        Categories
        <div className="selectMask">
          <span
            onClick={() => {
              return setProductsData(Products.products);
            }}
          >
            All
          </span>
          {categories.map((el, index) => {
            return (
              <span
                onClick={(e) => {
                  setProductsData(
                    Products.products.filter(
                      (e) =>
                        e.category.toLowerCase().indexOf(el.toLowerCase()) != -1
                    )
                  );
                }}
              >
                {el}
              </span>
            );
          })}
        </div>
      </div>
      <h2 className="searchedPlaceholder">{searchInput ? searchInput : ""}</h2>
      <ItemsContent list={productsData} />
    </div>
  );
};
