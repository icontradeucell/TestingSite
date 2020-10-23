import React from "react";
import Button from "../global/Button";

const ShareResult = () => {
  return (
    <div className='share-result'>
      <img
        className='shareResultsImg'
        src={require("../../assets/results/shareResultsImg.png")}
        alt=''
      />
      <div className='sharing'>
        <p>Natijalaringizni yaqinlaringiz bilan baham ko'ring</p>
        <div className='social-media-links'>
          <img src={require("../../assets/results/facebook.png")} alt='' />
          <img src={require("../../assets/results/instagram.png")} alt='' />
          <img src={require("../../assets/results/oddnaklasniki.png")} alt='' />
          <img src={require("../../assets/results/telegram.png")} alt='' />
        </div>
        <div className='shareable-link'>
          http://www.abitur.uz//result/1125686
        </div>
        <div className='share-btns'>
          <div>
            <Button
              bgClass='uzbBlue'
              text='Linkni nusxa olish'
              px={1}
              py={1.8}
              size={0.9}
            />
          </div>
          <div>
            <Button bgClass='uzbGreen' text='Bosh sahifa' size={0.9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareResult;
