import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

function Product({ product }) {
  let history = useHistory();

  console.log(product);

  const handleProductClick = ({ id }) => {
    if (!id) return;
    history.push(`/products/${id}`);
  };
  return (
    <div className="product" onClick={() => handleProductClick(product)}>
      {console.log(product)}
      <div className="product__top">
        <img
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="product__bottom">
        <p>{product && product.name}</p>
        <p>{product && product.price}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
