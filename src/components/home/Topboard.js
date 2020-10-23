import React from "react";
import TopboardStduent from "./TopboardStduent";
import TopboardTitle from "./TopboardTitle";

const Topboard = () => {
  const topFiveSts = [
    {
      stImgUrl: "student2",
      stName: "ABDURASULOVA RUXSORA",
      stAdress: "TOSHKENT, ANGREN TUMANI",
      stResult1: 69,
      stResult2: 80,
      stPlace: 2,
    },
    {
      stImgUrl: "student1",
      stName: "ERGASHEV HUMOYUN",
      stAdress: "TOSHKENT, ANGREN TUMANI",
      stResult1: 70,
      stResult2: 88,
      stPlace: 1,
    },
    {
      stImgUrl: "student3",
      stName: "MURODOV MUHAMMAD YUSUF",
      stAdress: "NAMANGAN, KOSONSOY TUMANI",
      stResult1: 66,
      stResult2: 78,
      stPlace: 3,
    },
    {
      stImgUrl: "student4",
      stName: "ALIYEV AZAMJON",
      stAdress: "NAMANGAN, CHORTOQ TUMANI",
      stResult1: 90,
      stResult2: 70,
      stPlace: 4,
    },
    {
      stImgUrl: "student5",
      stName: "ERGASHEV SHAHZOD",
      stAdress: "NAMANGAN, CHORTOQ TUMANI",
      stResult1: 66,
      stResult2: 75,
      stPlace: 5,
    },

  ];

  return (
    <div className='topboard container'>
      <TopboardTitle title='TOPBOARD' />
      <div className='topboard-desc'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          culpa laudantium deserunt tempora doloribus? Consequuntur debitis quis
          aut quaerat amet!
        </p>
      </div>
      <div className='topboard-content-wrapper'>
        {topFiveSts.map((st) => {
          return (
            <TopboardStduent
              key={st.stPlace}
              stImgUrl={st.stImgUrl}
              stName={st.stName}
              stAdress={st.stAdress}
              stResult1={st.stResult1}
              stResult2={st.stResult2}
              stPlace={st.stPlace}
            />

          );
        })}
      </div>
    </div>
  );
};

export default Topboard;
