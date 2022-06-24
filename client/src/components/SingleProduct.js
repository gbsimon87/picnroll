import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Product from "./Product";

function SingleProduct() {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const fetchProduct = () => {
    console.log(id);
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then(({ data }) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(id);
    fetchProduct(id);
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div className="page-single-product">
      <h3>ID: {id}</h3>
      <Product product={product} />
    </div>
  );
}

export default SingleProduct;
