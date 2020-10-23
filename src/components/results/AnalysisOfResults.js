import React from "react";
import StatsOfResults from "./StatsOfResults";
import Button from "../global/Button";
import TopboardCrown from "../home/TopboardCrown";
import StStats from "../home/StStats";

const AnalysisOfResults = () => {
  return (
    <div className='analysis-of-results'>
      <header>
        <h2>NATIJALARINGIZ TAHLILI</h2>
        <p>
          O'z natijalaraingizni tahlil qlishingiz va o'z ustingizda ishlashingiz
          mumkin
        </p>
      </header>
      <div className='topboard-and-stats'>
        <div className='stat-crown-wrapper'>
          <TopboardCrown place={1} />
          <h2 className='red-title'>
            Top boarddagi o'rningizni saqlab qolmoqdasiz
          </h2>
        </div>
        <div className='stats'>
          <StStats
            stResult={93}
            color='#0b89ff'
            statDesc='Saytda test ishlashdagi urisnishlar koefitsenti'
            inPercent={true}
            className='tryes'
          />
          <StStats
            stResult={90}
            color='#4cbf7a'
            statDesc="Testdagi to'gri javoblar koefitsenti"
            inPercent={false}
            className='corrects'
          />
        </div>
      </div>

      <StatsOfResults />

      <div className='see-correct-inncorrects'>
        <Button
          bgClass='uzbBlue'
          text="To'g'ri va noto'g'ri javonlarni ko'rib chiqish"
        />
      </div>
    </div>
  );
};

export default AnalysisOfResults;
