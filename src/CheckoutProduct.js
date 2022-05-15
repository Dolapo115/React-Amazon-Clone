import React from "react";
import "./CSS/checkout-product.css";
import { DataBucket } from "./StateProvider";
import StarIcon from "@mui/icons-material/Star";


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [, dispatch] = DataBucket();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct-main">
      <img className="checkoutProduct-image" src={image} alt = ''/>

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>#</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star-icon" />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
