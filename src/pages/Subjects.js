import React from "react";
import Showcase from "../components/global/Showcase";
import SubjectBoxWrap from "../components/subjects/SubjectBoxWrap";
import PrezidentWords from "../components/home/PrezidentWords";
import PageTitle from '../components/global/PageTitle';

const Subjects = () => {
  return (
    <div>
      <Showcase
        bgName='subjects'
        title='Fanlar'
        text="Saytdagi fanlar ro'yxati va fan bo'yicha test topshirish imkoniyati"
      />
      <PageTitle title="Mavjud fanlar va ular kesimida  alohida test topshirib o‘zingizni sinab ko’rishingiz mumkin" text="Testlarimiz aynan abituriyentlar uchun mo’ljallangan." />
      <SubjectBoxWrap />
      <PrezidentWords />
    </div>
  );
};

export default Subjects;
