import React from "react";
import Result from "../components/results/Result";
import ShareResult from "../components/results/ShareResult";
import AnalysisOfResults from "../components/results/AnalysisOfResults";
import TestHeader from "../components/testprocess/TestHeader";

const TestResults = () => {
  return (
    <div className='container'>
      <div className='test-results'>
        <TestHeader />
        <Result />
        <ShareResult />
        <AnalysisOfResults />
      </div>
    </div>
  );
};

export default TestResults;
