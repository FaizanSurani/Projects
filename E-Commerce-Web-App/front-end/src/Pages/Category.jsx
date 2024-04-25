import React, { useContext } from "react";
import "./Category.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Item";

export default function Category(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="category">
      <img className="category-banner" src={props.banner} alt="" />
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="category-sort">
          Sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="category-load-more">Explore More</div>
    </div>
  );
}
