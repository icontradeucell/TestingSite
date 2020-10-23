import React from "react";
import SubjectBox from "./SubjectBox";
import Button from "../global/Button";
import TestLangOptions from "./TestLangOptions";

const StartTestModal = ({ symbol, name, bgcolor, closeTestModal }) => {
  const handleClick = (e) => {
    closeTestModal(e);
  };
  return (
    <div className='test-modal-wrapper' onClick={handleClick}>
      <div className='start-test-modal'>
        <SubjectBox
          symbol={symbol}
          name={name}
          bgcolor={bgcolor}
          modal={true}
        />
        {name === "Chet tillari" && (
          <p className='test-modal-title'>
            {name} bo'yicha test ishlash uchun dastlab tilni tanlang
          </p>
        )}
        {name !== "Chet tillari" && (
          <p className='test-modal-title'>{name} bo'yicha testni boshlash</p>
        )}
        <p className='given-time'>Beriladigan vaqt: 59 daqiqa</p>
        {name === "Chet tillari" && <TestLangOptions />}
        <Button text='Testni boshlash' bgClass='blueBtn' imgSize={2} />
      </div>
    </div>
  );
};

export default StartTestModal;
