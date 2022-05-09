import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ProductModal.scss";

// This is a Product Modal Component
// OnClick of any Single Product, SingleProduct component will pass children and id as props to Modal component
// ID will be used to call Product API


// Modal stylings
const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "var(--greyLight-1)",
    transform: "translate(-50%, -50%)",
  },
};

const ProductModal = ({ children, id }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [productById, setProductById] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchProductData = async () => {
    const { data } = await axios.get(
      `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`
    );
    setProductById(data);
  };

  //fetch the Product data only once
  useEffect(() => {
   // console.log(id);
    fetchProductData();
  }, []);

  return (
    <div>
      <div onClick={openModal} className="product-card">
        {children}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="name">{productById.name}</h2>

        <img
          src={productById.image}
          alt={productById.name}
          id="image"
          className="image-modal"
        />
        <div className="prod-grid">
          <h3 className="price">Price: ${productById.price}/lbs</h3>

          <h4>Description:</h4>

          <p>{productById.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
