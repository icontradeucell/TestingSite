import React from "react";
import TestLeaflet from "./TestLeaflet";
import Questions from "./Questions";
import QuestionsContextProvider from "../../contexts/QuestionsContext";
import SelectedContextProvider from "../../contexts/SelectedContext";
import TestHeader from "./TestHeader";
import TestResults from "../../pages/TestResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const QuestionArea = () => {
  return (
    <div className='question-area'>
      <QuestionsContextProvider>
        <SelectedContextProvider>
          <div className='testHeader-questions'>
            <TestHeader />
            <Questions />
          </div>
          <TestLeaflet />
        </SelectedContextProvider>
      </QuestionsContextProvider>
    </div>
  );
};

export default QuestionArea;
