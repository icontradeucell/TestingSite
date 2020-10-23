import React, { useState } from "react";

const ChooseSubBtn = ({
  text,
  bgClass,
  size,
  px,
  py,
  selectBtn,
  settestTime,
  testTime,
}) => {
  const [selected, setselected] = useState(false);
  const style = {
    padding: `${px}rem ${py}rem`,
    fontSize: `${size}rem`,
  };

  const handleClick = () => {
    selected ? setselected(false) : setselected(true);
    selected ? settestTime(testTime - 60) : settestTime(testTime + 60);
  };

  return (
    <button
      onClick={handleClick}
      style={style}
      className={`bordered-button ${bgClass}`}
    >
      <span> {text}</span>
      {selected && selectBtn ? <i class='far fa-check-circle'></i> : ""}
    </button>
  );
};

export default ChooseSubBtn;
