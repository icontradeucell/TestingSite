import React from "react";
import StStats from "./StStats";
import StudentInfo from "./StudentInfo";

const ToptenStudent = ({
  imgUrl,
  place,
  name,
  adress,
  coeffiCient,
  correctAnswers,
  color,
}) => {
  const placeStyles = {
    border: `1px solid ${color}`,
  };

  const placeNum = {
    color: `${color}`,
  };
  return (
    <div className='container'>
      <div className='topten-card'>
        <div className='topten-card-item1'>
          <div className='place' style={placeStyles}>
            <h1 style={placeNum}>{place}</h1>
          </div>
          <div className='topten-st-info'>
            <div className='topten-st-img'>
              <img src={`${imgUrl}`} alt='' />
            </div>
            <StudentInfo stName={name} stAdress={adress} color={color} />
          </div>
        </div>

        <div className='topten-card-item2'>
          <StStats stResult={coeffiCient} inPercent={true} color={color} statDesc="URINISHLAR KOEFFITSENTI" />
          <StStats stResult={correctAnswers} inPercent={false} color={color} statDesc="TO'G'RI JAVOBLAR" />
        </div>
      </div>
    </div>
  );
};

export default ToptenStudent;
