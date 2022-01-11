import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProductCard from "./ProductCard";

export default (props) => (
    <StaticQuery
        query={graphql`
        query ProductPrices {
            prices: allStripePrice(
            filter: { active: { eq: true }, currency: { eq: "usd" } }
            sort: { fields: [unit_amount] }
            ) {
            edges {
                node {
                id
                active
                currency
                unit_amount
                product {
                    id
                    name
                    images
                }
                }
            }
            }
        }
        `}
        render={({ prices }) => (
            <div id="product-container" className="card-container">
                {prices.edges.map(({ node: price }) => {
                    const newProduct = {
                        sku: price.id,
                        name: price.product.name,
                        price: price.unit_amount,
                        currency: price.currency,
                        image: price.product.images,
                    }
                    return <ProductCard key={price.id} product={newProduct} />
                })}
            </div>
        )}
    />
)