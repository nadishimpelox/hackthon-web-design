import React from 'react';
import footer from './image/XMLID 1.png';
import img1 from './image/image 12.svg';
import img2 from './image/image 13.svg';
import img3 from './image/image 14.svg';
import './styles/footer.css';
import { useState } from 'react';

const Footer = (props) => {
  return (
    <>
      <div className="containers">
        <div className='footer-ref'>
        <div>
          <div className="footer-card">
            <div>
              <img src={img1} />
            </div>
            <div>
              <p className='footer-heading'>Find the Perfect Fit</p>
              <div className='footer-content'>Everybody is different, which is why we offer styles for every body.</div>
            </div>
          </div>
          <div className="footer-card">
            <div>
              <img src={img2} />
            </div>
            <div>
              <p className='footer-heading'>Free Exchanges</p>
              <div className='footer-content'>One of the many reasons you can shop with peace of mind.</div>
            </div>
          </div>
          <div className="footer-card">
            <div>
              <img src={img3} />
            </div>
            <div>
              <p className='footer-heading'>Contact Our Seller</p>
              <div className='footer-content'>They are here to help you. That's quite literally what we pay them for.</div>
            </div>
          </div>
        </div>
        <div>
          <img className='footer-img' src={footer} />
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
