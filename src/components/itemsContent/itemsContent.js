import "./style.scss";
import ItemTemplate from "../itemTemplate/itemTemplate";
import NoItems from "./noItems";

export default ({ list }) => {
  return (
    <div className="itemsContent">
      {list.length > 0 ? (
        list.map((item, index) => {
          return <ItemTemplate item={item} />;
        })
      ) : (
        <NoItems
          h1="No data matches your search :("
          span="But keep browsing..."
        />
      )}
    </div>
  );
};
