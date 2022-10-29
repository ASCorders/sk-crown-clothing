import React, { useContext } from "react";
import "./shop.style.scss";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products &&
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
}

export default Shop;
