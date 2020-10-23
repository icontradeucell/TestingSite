import React from "react";
import Button from "../../components/global/Button";

const Registeration = () => {
  return (
    <div className='container'>
      <div className='registration'>
        <form>
          <h2>Fikr yoki savollaringizni yo'llang</h2>
          <p className='reg-instruct'>
            Ism familiyangizni kirtitayotganda pasport bo'yicha kiriting{" "}
          </p>
          <label id='nameInput' htmlFor='name'>
            <input type='text' id='name' placeholder='Ism' />
          </label>
          <label htmlFor='familiya'>
            <input type='text' id='familiya' placeholder='Familiya' />
          </label>
          <label htmlFor='manzil'>
            <input
              type='text'
              id='manzil'
              placeholder='Eamil yoki telefon raqamingiz'
            />
          </label>
          <textarea id='' placeholder='Fikringiz' rows={5}></textarea>
          <Button
            text="Jo'natish"
            bgClass='darkBlueBtn'
            size={1}
            py={2}
            px={0.5}
          />
        </form>
        <div className='register-img'>
          <img src={require("../../assets/contact/EmailImage.png")} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Registeration;
