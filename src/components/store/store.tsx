import storeItem from "./../constants/data.json";
import { Products } from "./products";
export const store = () => {
  return (
    <div>
      {storeItem.map((item) => (
        <div key={item.id}>
          <Products {...item} />
        </div>
      ))}
    </div>
  );
};
