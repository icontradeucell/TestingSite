import React from "react";
import ChangeTestSubject from "./ChangeTestSubject";

const QuestionNumber = ({ num }) => {
  return (
    <div className='question-number'>
      <div className='qnum-big'>
        <span>
          {num < 10 && 0}
          {num}
        </span>
        <p>SAVOL</p>
      </div>
      <div className='blog'>
        <p>Blok</p>
        <p className='blok-name'>Matematika</p>
      </div>
      <ChangeTestSubject subname='FIZIKA' />
    </div>
  );
};

export default QuestionNumber;
