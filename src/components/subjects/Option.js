import React, { useState, useContext } from "react";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const Option = ({ country, name, question, checked, handleChecked, qnum }) => {
  const { setSelectedChoice } = useContext(QuestionsContext);
  const handleClick = (name) => {
    handleChecked(name);
    setSelectedChoice(name, qnum);
  };

  return (
    <div className='lang-option'>
      <div
        onClick={() => handleClick(name)}
        className={`option-check ${checked ? "optionChecked " : ""}`}
      >
        <p>{name}</p>
      </div>
      {!question && (
        <div className='option-img'>
          <img
            src={require(`../../assets/subjects/${country}-flag.jpg`)}
            alt=''
          />
        </div>
      )}
      <div className=''>
        {question && (
          <img src={require(`../../assets/testprocess/answer.png`)} alt='' />
        )}
      </div>
      {!question && <p>{name}</p>}
    </div>
  );
};

export default Option;
