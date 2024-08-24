import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { productList } from "../../productlist.js";

const Shop = () => {
  const [products, setProducts] = useState(productList);
  return (
    <div className="shop">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
