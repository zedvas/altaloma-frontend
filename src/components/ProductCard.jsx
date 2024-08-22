import "../styles/productCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div>
        <img src={product.src} alt="" />
      </div>
      <div >
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
