import React from "react";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ProductCard = ({ product }) => {
    const { addItem } = useShoppingCart()

    return (
        <div className="card">
            <img src={product.image} alt="" />
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