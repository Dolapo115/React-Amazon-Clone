import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./CSS/product.css";
import {DataBucket} from './StateProvider'

function Product({ id, image, title, price, rating }) {

    const [, dispatch] = DataBucket()

  function addToCart() {
    dispatch(
      {
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title:title,
        image: image,
        price: price,
        rating: rating
      }
      }
    )
  }

  return (
    <div className="product-main">
      <p>{title}</p>
      <p>
        <small>#</small>
        <strong>{price}</strong>
      </p>
      <div className="product-rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star-icon" />
        ))}
      </div>
      <img src={image} alt="" />
      <button onClick = {addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
