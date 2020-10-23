import React from "react";

const StStats = ({ stResult, color, statDesc, inPercent, className }) => {
  const percenStyles = {
    width: `${stResult}%`,
    backgroundColor: `${color}`,
  };
  const urinishKoef = {
    border: `1px solid ${color}`,
  };
  return (
    <div className={`result-container ${className}`}>
      <div>
        <p className='statDesc'>{statDesc}</p>
        <div className='koeffitsent'>
          {stResult}
          {inPercent && "%"}
        </div>
      </div>
      <div className='urinishlar-koefitsenti' style={urinishKoef}>
        <span style={percenStyles} className='percent'></span>
      </div>
    </div>
  );
};

export default StStats;
