import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div className="page-home container">
      <h1>Products</h1>
      <div className="products-list">
        {console.log(products)}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
