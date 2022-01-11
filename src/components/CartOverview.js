import React, { useState } from "react";

import { useShoppingCart } from "use-shopping-cart";

const CartOverview = () => {
    const [loading, setLoading] = useState(false);

    const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } = useShoppingCart();

    return (
        <div id="cart-review">
            <p>Number of Items: {cartCount}</p>
            <p>Total: {formattedTotalPrice}</p>

            {/* Redirects the user to Stripe */}
            <button
                className="btn"
                disabled={loading}
                onClick={() => {
                    setLoading(true)
                    redirectToCheckout()
                }}
            >
                {loading ? "Loading..." : "Checkout"}
            </button>
            <button className="btn" onClick={clearCart}>
                Clear cart
            </button>
        </div>
    )
}

export default CartOverview;