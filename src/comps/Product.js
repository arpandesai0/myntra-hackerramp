import React from "react";
import { Link } from "react-router-dom";

function Product({ id, brand, product, price, img }) {
  return (
    <Link to={"/products/" + id}>
      <div className="cursor-pointer w-64 m-2">
        <img className="h-72" src={img} />
        <p className="font-semibold">{brand}</p>
        <p>{product}</p>
        <p className="font-semibold">{price}</p>
      </div>
    </Link>
  );
}

export default Product;
