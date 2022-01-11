import * as React from "react";
import { CartProvider } from "use-shopping-cart";

import Layout from "../components/layout";
import Seo from "../components/seo";
import CartOverview from "../components/CartOverview";
import Products from "../components/products/Products";
import "../css/style.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>LT.JAQL</h1>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLISHABLE_KEY}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Products />
    </CartProvider>
  </Layout>
)

export default IndexPage
