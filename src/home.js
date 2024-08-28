import React from 'react';
import logo from './image/logo.svg'
import home from './image/home.png'
import shop from './image/Vector.svg'
import './styles/home.css';

const Home = (props) => {
  return (
<>
<div className='container'>
    <div className='header'>
        <div>
        <img src={logo} />
        </div>
        <div className='header-ref'>
            <div className='header-list'>
                <div className='header-option'>Home</div>
                <div className='header-option'>Product</div>
                <div className='header-option'>About Us</div>
                <div className='header-option'>Contact us</div>
            </div>
        </div>
    </div>
    <div className='home-body'>
        <div>
            <img src={home} />
        </div>
        <div className='right-content'>
            <h2 className='home-heading'>Nike React</h2>
            <h2 className='home-sub-heading'>Infinity Run 2</h2>
            <p className='content'>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            </p>
        <div className='buy-now'>
            <img className='shop-img' src={shop} />
            <p className='buy-btn'>BUY NOW</p>
        </div>

        </div>
    </div>
</div>
</>
  );
};

export default Home;
