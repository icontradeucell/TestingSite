import React from "react";

const StudentInfo = ({ stName, stAdress, color }) => {
  return (
    <div className='student-info'>
      <h3 style={{ color: `${color}` }}>{stName}</h3>
      <p className='stuent-address'>{stAdress}</p>
    </div>
  );
};

export default StudentInfo;
