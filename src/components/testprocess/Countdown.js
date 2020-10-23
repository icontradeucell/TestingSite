import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  console.log(Date.now());
  return (
    <div className='download-btn' className='noselect download-btn'>
      <h2>
        <Countdown date={Date.now() + 7200000} />
      </h2>
    </div>
  );
};

export default Timer;
