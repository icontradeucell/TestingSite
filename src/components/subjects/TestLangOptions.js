import React from "react";
// import LangOption from "./Option";

const TestLangOptions = () => {
  const optionInfos = [
    { country: "english", name: "Ingliz tili" },
    { country: "france", name: "Fransuz tili" },
    { country: "deutsch", name: "Nemis tili" },
    { country: "russia", name: "Rus tili" },
  ];

  return (
    <div className='lang-option-wrapper'>
      {/* {optionInfos.map((info) => {
        return <LangOption country={info.country} name={info.name} />;
      })} */}
    </div>
  );
};

export default TestLangOptions;
