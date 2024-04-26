import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="description">
      <div className="description-navigator">
        <div className="description-navbox">Description</div>
        <div className="description-navbox fade">Reviews (122)</div>
      </div>
      <div className="description-desc">
        <p>
          An e-commerce website is a virtual marketplace where businesses
          showcase their products or services to potential customers. It serves
          as a digital storefront, offering a wide range of products categorized
          for easy navigation. Customers can browse through the product
          listings, view detailed descriptions and images, and make purchases
          securely online.
        </p>
        <p>
          With features like user accounts, shopping carts, and secure payment
          gateways, e-commerce websites streamline the buying process, providing
          convenience and accessibility to shoppers worldwide. These platforms
          not only benefit customers but also empower businesses by expanding
          their reach beyond geographical boundaries.
        </p>
      </div>
    </div>
  );
}
