import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handeler: () => void;
};

const server = "shofiyf98yfhsd";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handeler,
}: ProductsProps) => {
  return (
    <div className="productcard">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>${price}</span>

      <div>
        <button onClick={() => handeler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
