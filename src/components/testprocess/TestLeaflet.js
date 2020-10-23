import React from "react";
import TestChoices from "./TestChoices";
import Button from "../global/Button";
import Timer from "./Countdown";

const TestLeaflet = () => {
  return (
    <div className='test-leaflet-wraper'>
      <Timer />
      <div className='test-leaflet'>
        <header>
          <span>MATEMATIKA</span>
        </header>
        <div className='leaflet-body'>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <div className='leaflet-line'></div>
          <TestChoices />
        </div>
      </div>
      <Button
        text='Titulni yashirish'
        bgClass='greenBtn'
        size={1}
        px={0.5}
        py={1}
      />
    </div>
  );
};

export default TestLeaflet;
