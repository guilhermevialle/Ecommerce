import "./style.scss";
import Mainpage from "./routes/mainpage";
import Listproducts from "./routes/listproducts";
import Productdetail from "./routes/productdetail";
import { React, createContext, useReducer, StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import cart from "./components/cart/cart";

export const Data = createContext();

function App() {
  const Reduce = (state, action) => {
    switch (action.type) {
      case "UPDATE-SEARCH-INPUT":
        return {
          ...state,
          searchInput: action.value,
        };
      case "UPDATE-CART":
        return {
          ...state,
          cart: action.value,
        };
      case "UPDATE-CART-PRODUCT":
        console.log("UPDATE-CART-PRODUCT", action.value);
        return {
          cart: action.value,
        };
    }
  };

  const ReduceInitialData = {
    searchInput: "",
    cart: [],
  };

  const [thisData, setThisData] = useReducer(Reduce, ReduceInitialData);

  return (
    <StrictMode>
      <Data.Provider value={{ thisData, setThisData }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/all-products" element={<Listproducts />} />
            <Route path="/product:id" element={<Productdetail />} />
          </Routes>
        </div>
      </Data.Provider>
    </StrictMode>
  );
}

export default App;
