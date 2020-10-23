import React from "react";

const CircleChoice = ({ letter, selected }) => {
  return (
    <div className='circle-letter'>
      <span className='choice-box'>{letter}</span>
      {selected.length > 0 ? <span className='answer-selected'></span> : ""}
    </div>
  );
};

export default CircleChoice;
