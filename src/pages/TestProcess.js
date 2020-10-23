import React from "react";
import TestHeader from "../components/testprocess/TestHeader";
import QuestionArea from "../components/testprocess/QuestionArea";
import TestButtons from "../components/testprocess/TestButtons";

const TestProcess = () => {
  return (
    <div className='container'>
      <div className='test-process'>
        <QuestionArea />
        <TestButtons />
      </div>
    </div>
  );
};

export default TestProcess;
