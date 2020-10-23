import React from "react";

const Answers = () => {
  const answers = [
    {
      qnum: 1,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 2,
      selected: "C",
      correctAns: "C",
    },
    {
      qnum: 3,
      selected: "A",
      correctAns: "A",
    },
    {
      qnum: 4,
      selected: "D",
      correctAns: "D",
    },
    {
      qnum: 5,
      selected: "B",
      correctAns: "B",
    },
    {
      qnum: 6,
      selected: "A",
      correctAns: "A",
    },
    {
      qnum: 7,
      selected: "A",
      correctAns: "C",
    },
    {
      qnum: 8,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 9,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 10,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 11,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 12,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 13,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 14,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 15,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 16,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 17,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 18,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 19,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 20,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 21,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 22,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 23,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 24,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 25,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 26,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 27,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 28,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 29,
      selected: "A",
      correctAns: "B",
    },
    {
      qnum: 30,
      selected: "A",
      correctAns: "B",
    },
  ];
  return (
    <div className='answers'>
      {answers.map((answer) => {
        return (
          <div className=''>
            <span className='q-num'>
              {answer.qnum}.{answer.selected}
            </span>
            {answer.selected === answer.correctAns ? (
              <i class='fas fa-check fa-2x'></i>
            ) : (
              <i class='fas fa-times fa-2x'></i>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
