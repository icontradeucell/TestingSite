import React, { useContext } from "react";
import Slider from "react-slick";
import Question from "./Question";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const QuestionsCarousel = () => {
  const { mathQuestions } = useContext(QuestionsContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className='questions-carusel'>
      <Slider {...settings}>
        {mathQuestions.map((q) => (
          <Question key={q.number} qnum={q.number} />
        ))}
      </Slider>
    </div>
  );
};

export default QuestionsCarousel;
