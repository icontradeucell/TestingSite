import React from "react";
import QuestionNumber from "./QuestionNumber";
import QuestionItself from "./QuestionItself";

const Question = ({ qnum }) => {
  return (
    <div className='question'>
      <QuestionNumber num={qnum} />
      <QuestionItself qnum={qnum} />
    </div>
  );
};

export default Question;
