import React, { useState } from "react";
import Radios from "../subjects/Radios";

const QuestionItself = ({ qnum }) => {
  return (
    <div className='question-itself'>
      <img src={require("../../assets/testprocess/mathProblem.png")} alt='' />
      <Radios qnum={qnum} />
    </div>
  );
};

export default QuestionItself;
