import React from 'react';
import "./footer.scss";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Marques</h1>
          <span>Paul Reed Smith</span>
          <span>Ibanez</span>
          <span>Gibson</span>
          <span>Fender</span>
        </div>
        <div className="item">
          <h1>À propos</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta dicta pariatur! Harum hic soluta sit ullam fugiat blanditiis exercitationem dignissimos, saepe, atque nostrum, velit eius aliquid quas maiores cum.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Bocchi</span>
          <span className="copyright">
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="img\Screenshot_11.jpg" alt=""/>
        </div>
      </div>
    </div>

  )
}
