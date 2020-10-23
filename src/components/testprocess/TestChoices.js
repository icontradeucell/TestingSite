import React, { useContext } from "react";
import TestChoice from "./TestChoice";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const TestChoices = () => {
  const { mathQuestions } = useContext(QuestionsContext);

  return (
    <div className='test-choices'>
      {mathQuestions.map((q) => (
        <TestChoice key={q.number} num={q.number} />
      ))}
    </div>
  );
};

export default TestChoices;
