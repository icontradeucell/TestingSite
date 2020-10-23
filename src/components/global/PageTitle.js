import React from "react";

const PageTitle = ({ title, text }) => {
  return (
    <div className='page-title'>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default PageTitle;
