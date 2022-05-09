import React, { useState, useEffect, useMemo } from "react";
import "./Products.scss";
import axios from "axios";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { BsSearch } from "react-icons/bs";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [ogResult, setOgResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchProducts = async () => {
    const { data } = await axios.get(
      "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list"
    );
    setOgResult(data.products);
    setProductData(data.products);
  };
  

// If expected data is huge, search can be optmized using debounce with a timelimit of 1-2secs 
// to avoid making API calls on every keystoke. Either writing a polyfill or using library like lodash
// Line 47 has setTimeOut of 1sec on event to demonstrate the similar behaviour
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredData = ogResult.filter((t) =>
      t.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductData(filteredData);
  }, [searchText]);

  return (
    <div className="container">
      <div className="form">
        
        <input
          type="text"
          placeholder="Search products"
          className="form__input"
          onChange={(e) => setTimeout(() => handleSearch(e), 1000)}
        />
        <BsSearch className="searchImg"/>
       
      </div>
      
      <label>Displaying {productData.length} rows</label>
      
      <div className="products">
      
        {productData &&
          productData.map((c) => {
            return (
              <SingleProduct
                key={c.product_id}
                id={c.product_id}
                name={c.name}
                price={c.price}
                image={c.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
