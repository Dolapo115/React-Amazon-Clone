import React from "react";
import "./CSS/mobilenav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { DataBucket } from "./StateProvider";

function MobileNav() {
  const [{ basket, user, loginStatus }] = DataBucket();

  


  return (
    <div className="mobilenav-main">
      <Link to="/">
        <img
          className="mobile-nav-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="mobile-nav-search">
        <input type="text" className="mobile-nav-search-input" />
        <SearchIcon className="mobile-nav-search-icon" />
      </div>

      <div className="mobile-nav-right">
        <Link
          to={loginStatus ? "/" : "/login"}
          className="header-right-link"
        >
          <div className="right-option">
            <span className="option-line-one">Hello</span>
            <span className="option-line-two">
              {user ? `${user}` : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/checkout" className="header-right-link">
          <div className="right-option-basket">
            <ShoppingBasketIcon />
            <span className="option-line-two basket count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
