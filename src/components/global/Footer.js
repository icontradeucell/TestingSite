import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-items'>
          <div className='logo'>
            <img src={require("../../assets/global/Untitled-2.png")} alt='' />
          </div>
          <div className='footer-nav'>
            <div className='fan-uqituvchi'>
              <h5>FANLAR</h5>
              <h5>O'QIUVCHILAR</h5>
            </div>
            <div className='kontakt-muassasa'>
              <h5>OLIY TA'LIM MUASSASALRI</h5>
              <h5>KONTAKT</h5>
            </div>
          </div>
          <div className='social-media-links'>
            <div className='media-link'>
              <i className='fab fa-telegram-plane'></i>
            </div>
            <div className='media-link'>
              <i className='fab fa-facebook-f'></i>
            </div>
            <div className='media-link'>
              <i className='fab fa-instagram'></i>
            </div>
            <div className='media-link'>
              <i className='fab fa-twitter'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div>
            <p>Copyright 2020 IT Rise Up. Barcha huquqlar himoyalangan</p>
          </div>
          <div>
            <p>Sayt IT Rise Up tomonidan yaratildi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
