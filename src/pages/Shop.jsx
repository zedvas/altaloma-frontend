import ProductCard from "../components/ProductCard";
import { useState } from "react";
import ShopCSS from './Shop.module.css'
import {productList} from '../productList'


const Shop = () => {
    const [products, setProducts] = useState(productList)
    return (
        <div className={ShopCSS.container}>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default Shop