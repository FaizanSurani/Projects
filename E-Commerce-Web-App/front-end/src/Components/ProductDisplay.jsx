import React from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

export default function ProductDisplay(props) {
  const { product } = props;

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-img">
          <img className="product-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="product-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-right-prices">
          <div className="product-right-price-old">${product.old_price}</div>
          <div className="product-right-price-new">${product.new_price}</div>
        </div>
        <div className="product-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="product-right-size">
          <h1>Select Size</h1>
          <div className="product-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add to Cart</button>
        <p className="product-right-category">
          <span>Category: </span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-right-category">
          <span>Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
}
