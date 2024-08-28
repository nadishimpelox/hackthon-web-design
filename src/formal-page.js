import React from 'react';
import shoe1 from './image/logo.svg';
import shoe from './image/image 5.png';
import shop from './image/Vector.svg';
import './styles/casual.css';
import { useState } from 'react';

const Formal = (props) => {
  const shoeCard = [
    {
      id: 1,
      image: shoe1,
      brand: 'Nike',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$234',
      img: shoe,
      shop: shop
    },
    {
      id: 2,
      image: shoe1,
      brand: 'Nike',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$234',
      img: shoe,
      shop: shop
    },
    {
      id: 3,
      image: shoe1,
      brand: 'Nike',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$234',
      img: shoe,
      shop: shop
    }
  ];

  return (
    <>
      <div className="containers">
        <div className="casual-shoe">FORMAL SHOES</div>
        <div className='shoe-main-content'>
        <div className="shoe-card">
          <div className="shoe-bg">
            <img src={shoe} alt="logo" />
          </div>
          <h4 className="brand">Prestige High-Cut Leather </h4>
          <p className="shoe-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="card-footer">
            <div className="amount">$234</div>
            <div className="buy-now">
              <img className="shop-img" src={shop} />
              <p className="buy-btn">BUY NOW</p>
            </div>
          </div>
        </div>
        <div className="shoe-card">
          <div className="shoe-bg">
            <img src={shoe} alt="logo" />
          </div>
          <h4 className="brand">Slip-On Formal Shoe</h4>
          <p className="shoe-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="card-footer">
            <div className="amount">$234</div>
            <div className="buy-now">
              <img className="shop-img" src={shop} />
              <p className="buy-btn">BUY NOW</p>
            </div>
          </div>
        </div>
        <div className="shoe-card">
          <div className="shoe-bg">
            <img src={shoe} alt="logo" />
          </div>
          <h4 className="brand">Slip-On Formal Shoe</h4>
          <p className="shoe-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="card-footer">
            <div className="amount">$234</div>
            <div className="buy-now">
              <img className="shop-img" src={shop} />
              <p className="buy-btn">BUY NOW</p>
            </div>
          </div>
        </div>
        </div>
    
      </div>
    </>
  );
};

export default Formal;
