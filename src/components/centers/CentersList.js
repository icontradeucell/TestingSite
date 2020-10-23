import React from "react";
import CenterCard from "./CenterCard";

const TeachersList = ({ centers }) => {
  return (
    <div className='teachers-list'>
      <div className='container'>
        {centers.map((center) => {
          return (
            <CenterCard
              key={center.id}
              name={center.fullname}
              text={center.text}
              id={center.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeachersList;
