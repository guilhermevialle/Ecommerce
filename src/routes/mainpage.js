import Navbar from "../components/navbar/navbar";
import ItemsContent from "../components/itemsContent/itemsContent";
import Products from "../server/products.json";

export default () => {
  return (
    <div className="mainpage">
      <Navbar />
      <ItemsContent list={Products.products} />
    </div>
  );
};
