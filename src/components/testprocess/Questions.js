import React from "react";
import SubsByMajor from "./SubsByMajor";
import TestsByMajor from "./TestsByMajor";

const Questions = () => {
  return (
    <div className='questions'>
      <SubsByMajor />
      <TestsByMajor />
    </div>
  );
};

export default Questions;
