import React from "react";
import Button from "../global/Button";

const TestButtons = () => {
  return (
    <div className='test-buttons'>
      <Button text='Avvalgi blok' bgClass='blueBtn' py={1.5} px={0.5} />
      <Button
        className='middleBtn'
        text='Testni yakunlash'
        bgClass='greenBtn'
        py={1.5}
        px={0.5}
      />
      <Button text='Keyingi blok' bgClass='blueBtn' py={1.5} px={0.5} />
    </div>
  );
};

export default TestButtons;
