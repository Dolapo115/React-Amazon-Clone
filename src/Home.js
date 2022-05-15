import React from 'react';
import './CSS/home.css'
import Product from './Product';
import banner from './images/banner.jpg'
import hublot from './images/hublot.png'
import jbl from './images/jbl.png'
import oraimo from './images/oraimo.jpg'
import rayban from './images/rayban.jpg'
import shoes from './images/shoes.jpg'
import jordans from './images/jordans.jpg'


function Home(){


    
    

    return (
      <div className="home-main">
        <img
          src={banner}
          className="home-image"
          alt = ''
        />
        {/* <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home-image"
        /> */}

        <div className="home-row">
          <Product
            id="12321341"
            title="Enjoy your music wirelessly! JBL offers a wide selection of waterproof portable Bluetooth speakers with rechargeable battery options"
            price={11.96}
            rating={Math.floor(Math.random() * 5)}
            image={jbl}
          />
          <Product
            id="49538094"
            title="Shop the latest Air Jordan Sneakers, including the Air Jordan 13 Retro 'Navy' and more, the most trusted name in authentic sneakers "
            price={239.0}
            rating={Math.floor(Math.random() * 5)}
            image={jordans}
          />
        </div>
        <div className="home-row">
          <Product
            id="4903850"
            title="Enjoy deep bass with 8+28hrs total playtime! Get Clear Voice In Call Wherever You Are! oraimo 2baba FreePods 3 for All Music Lovers!"
            price={199.99}
            rating={Math.floor(Math.random() * 5)}
            image={oraimo}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={Math.floor(Math.random() * 5)}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={Math.floor(Math.random() * 5)}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="4903850"
            title="Discover the savoir-faire of Swiss watchmaking with Hublot watches. Thanks to the 'Art of Fusion', Hublot offers unique and daring timepieces."
            price={199.99}
            rating={Math.floor(Math.random() * 5)}
            image={hublot}
          />
          <Product
            id="23445930"
            title="Shop the latest Ray-Ban Sunglasses, including the ray-Ban 13 Retro 'Navy' and more, the most trusted name in authentic sunglasses "
            price={98.99}
            rating={Math.floor(Math.random() * 5)}
            image={rayban}
          />
          <Product
            id="3254354345"
            title="Discover a broad selection of quality and affordable italian shoes online in Nigeria. Enjoy huge discounts"
            price={598.99}
            rating={Math.floor(Math.random() * 5)}
            image={shoes}
          />
        </div>
        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={Math.floor(Math.random() * 5)}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    );

}

export default Home