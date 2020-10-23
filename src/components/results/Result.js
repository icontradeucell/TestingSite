import React from "react";
import Answers from "./Answers";

const Result = () => {
  return (
    <div className='result'>
      <img src={require("../../assets/results/answersLeaflet.jpg")} alt='' />
      <div className='answers-wrapper'>
        <Answers />
        <Answers />
      </div>
    </div>
  );
};

export default Result;
