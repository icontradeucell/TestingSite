import React, { useContext } from "react";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const SubsByMajor = () => {
  const { subjects, mathQuestions } = useContext(QuestionsContext);
  let major = mathQuestions[0].field;
  return (
    <div className='subs-by-major'>
      <div className='subjects'>
        <h2 className='active'>{subjects[0]}</h2>
        <i className='fas fa-arrow-circle-right'></i>
        <h2>{subjects[1]}</h2>
        <i className='fas fa-arrow-circle-right'></i>
        <h2>{subjects[2]}</h2>
      </div>
      <div className='major'>
        <span>YO'NALISH: </span>
        <span className='major-name'>{major}</span>
      </div>
    </div>
  );
};

export default SubsByMajor;
