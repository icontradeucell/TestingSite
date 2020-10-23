import React from "react";

const Setting = ({ iconName, title, text, color }) => {
  const titleColor = {
    color: `${color}`,
  };

  return (
    <div className='setting'>
      <img src={require(`../../assets/userSettings/${iconName}.png`)} alt='' />
      <span style={titleColor} className='title'>
        {title}
      </span>
      <span className='text'>{text}</span>
    </div>
  );
};

export default Setting;
