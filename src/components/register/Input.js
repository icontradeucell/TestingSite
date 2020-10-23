import React from "react";

const Input = ({ name, handler, type }) => {
  return (
    <label id='nameInput' htmlFor={`${name}`}>
      <span>{name}</span>
      <span className='required-sym'>*</span>
      <input onChange={handler} type={`${type}`} id={`${name}`} required />
    </label>
  );
};

export default Input;
