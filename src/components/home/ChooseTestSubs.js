import React, { useState } from "react";
import PageTitle from "../global/PageTitle";
import ChooseSubBtn from "./subjectBtns";
import Button from "../global/Button";

const ChooseTestSubs = () => {
  const [testTime, settestTime] = useState(0);

  const subjects = ["Ingliz tili", "Matematika", "Fizika"];

  return (
    <div className='container'>
      <div className='choose-test-subs'>
        <PageTitle title='Siz qaysi fanlardan test ishlamoqchisiz ? (max 3 )' />
        <div className='tests-by-subject-buttons'>
          {subjects.map((s) => (
            <ChooseSubBtn
              settestTime={settestTime}
              testTime={testTime}
              text={s}
              bgClass='darkBlueBtn'
              selectBtn={true}
            />
          ))}
        </div>
        <p>
          Berliadigan vaqt:{" "}
          {testTime > 60 ? `${testTime / 60}soat` : `${testTime}min`}{" "}
        </p>

        <Button text='Keyingi' bgClass='blueBtn' py={2} px={0.5} />
      </div>
    </div>
  );
};

export default ChooseTestSubs;
