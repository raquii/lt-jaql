import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProductCard from "./ProductCard";

const Products = (props) => (
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
                        name
                        id
                      localFiles {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
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
                        image: price["product"]["localFiles"][0],
                    }
                    return <ProductCard key={price.id} product={newProduct} />
                })}
            </div>
        )}
    />
)

export default Products;