import ProductCardCSS from './ProductCard.module.css';

const ProductCard = ({ product}) => {
    return (
        <div className={ProductCardCSS.cardWrapper}>
            <div className={ProductCardCSS.imgWrapper}>
                <img src={product.src} alt="" /> 
            </div>
            <div className={ProductCardCSS.textWrapper}>
                <h2>{product.name}</h2>
                <p className={ProductCardCSS.price}>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard