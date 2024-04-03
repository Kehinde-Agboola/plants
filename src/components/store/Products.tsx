type ProductsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const Products = ({ id, name, price, imgUrl }: ProductsProps) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt="" />
        <div className="flex">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
