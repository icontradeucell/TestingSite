import React from "react";

const TopboardTitle = ({ title, size }) => {
  return (
    <div className='topboard-title'>
      <div className='stars-left'>
        <i className='far fa-star'></i>
        <i className='far fa-star'></i>
        <i className='far fa-star'></i>
      </div>
      {size === 2 ? <h2>{title}</h2> : <h1>{title}</h1>}
      <div className='stars-right'>
        <i className='far fa-star'></i>
        <i className='far fa-star'></i>
        <i className='far fa-star'></i>
      </div>
    </div>
  );
};

export default TopboardTitle;
