import React from "react";
import "./CSS/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { DataBucket } from "./StateProvider";
import { getBasketTotal } from "./reducer";
//import { useNavigate } from "react-router-dom";

function Subtotal() {
  //const history = useNavigate();
  const [{ basket }, ] = DataBucket();

  return (
    <div className="subtotal-main">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"#"}
      />

      {/* <button onClick={(e) => history.push("/payment")}> */}
      <button onClick={()=>{alert('Feature To Be Added Soon')}}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
