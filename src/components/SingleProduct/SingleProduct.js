import React from "react";
import ProductModal from "../Modal/ProductModal";
import "./SingleProduct.scss";

const SingleProduct = ({ id, name, price, image }) => {
  return (
    <>
      <ProductModal id={id}>
        <div className="container-img">
          <img src={image} alt={name} id="image" className="image" />
        </div>

        <div style={{ padding: "0.5rem" }}>
          <h3>{name}</h3>
          <h4 className="price">${price}/lbs</h4>
        </div>
      </ProductModal>
    </>
  );
};

export default SingleProduct;
