import ProductCardCSS from "./ProductCard";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.src} alt="" />
      </div>
      <div >
        <h2>{product.name}</h2>
        <p >{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
