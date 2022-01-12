import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ProductCard = ({ product }) => {
    const { addItem } = useShoppingCart()
    const image = getImage(product.image);

    return (
        <div className="card">
            <GatsbyImage
                alt={product.name}
                image={image}
                className="product-img"
            />
            <h4>{product.name}</h4>
            <p>
                Price:{" "}
                {formatCurrencyString({
                    value: parseInt(product.price),
                    currency: product.currency,
                })}
            </p>
            <button className="btn" onClick={() => addItem(product)}>
                ADD TO CART
            </button>
        </div>
    )
}

export default ProductCard;