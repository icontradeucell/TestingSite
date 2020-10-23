import React from "react";
import Showcase from "../components/global/Showcase";
import OurTeam from "../components/contact/OurTeam";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className='contact-page'>
      <Showcase
        bgName='contact'
        title='KONTAKT'
        text='Hamkorlik va murojatlar uchun biz bilan aloqaga chiqing'
      />
      <OurTeam />
      <ContactForm />
    </div>
  );
};

export default Contact;
