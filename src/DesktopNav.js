import React from 'react';
import './CSS/desktopnav.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { DataBucket } from "./StateProvider";


function DesktopNav(){

  const [{basket, user, loginStatus}] = DataBucket();

  
    return (
      <div className="desktopnav-main">
        <Link to="/">
          <img
            className="desktop-nav-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="desktop-nav-search">
          <input type="text" className="desktop-nav-search-input" />
          <SearchIcon className="desktop-nav-search-icon" />
        </div>

        <div className="desktop-nav-right">
          <Link to={loginStatus ? '/' : "/login"} className="header-right-link">
            <div className="right-option">
              <span className="option-line-one">Hello </span>
              <span className="option-line-two">{user ? `${user}` : 'Sign In'}</span>
            </div>
          </Link>

          <Link to="/" className="header-right-link">
            <div className="right-option">
              <span className="option-line-one">Returns</span>
              <span className="option-line-two">&orders</span>
            </div>
          </Link>

          <Link to="/" className="header-right-link">
            <div className="right-option">
              <span className="option-line-one">Your</span>
              <span className="option-line-two">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header-right-link">
            <div className="right-option-basket">
              <ShoppingBasketIcon />
              <span className= 'option-line-two basket count'>{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    );

}

export default DesktopNav; 