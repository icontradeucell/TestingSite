import React, { useState } from "react";
import StartTestModal from "./StartTestModal";
import SubjectBox from "./SubjectBox";

const SubjectBoxWrap = () => {
  const [modalParams, setmodalParams] = useState({});
  const [testModal, settestModal] = useState(false);

  const subBoxes = [
    { symbol: "math", name: "Matemaika", bgcolor: "#e7a580" },
    { symbol: "physics", name: "Fizika", bgcolor: "#adff83" },
    { symbol: "biology", name: "Biologiya", bgcolor: "#7bacff" },
    { symbol: "chem", name: "Kimyo", bgcolor: "#fd75ff" },
    { symbol: "lang", name: "Chet tillari", bgcolor: "#ffe86a" },
    { symbol: "ad", name: "Adabiyot", bgcolor: "#9888e7" },
    { symbol: "hist", name: "Tarix", bgcolor: "#80e785" },
    { symbol: "tong", name: "Ona tili", bgcolor: "#e7c280" },
  ];

  const showTestModal = (symbol, name, bgcolor) => {
    settestModal(true)
    setmodalParams({
      symbol,
      name,
      bgcolor
    })
  }

  const closeTestModal = (e) => {
    if (e.target.className === 'test-modal-wrapper') {
      settestModal(false)
    }
  }
  return (
    <div className='sub-box-wrapper'>
      <div className="container">
        {subBoxes.map((box) => {
          return (
            <div key={box.name} onClick={() => showTestModal(box.symbol, box.name, box.bgcolor)}>
              <SubjectBox
                symbol={box.symbol}
                name={box.name}
                bgcolor={box.bgcolor}
              />
            </div>
          );
        })}
      </div>
      { testModal && <StartTestModal symbol={modalParams.symbol} name={modalParams.name} bgcolor={modalParams.bgcolor} closeTestModal={closeTestModal} />}
    </div>
  );
};

export default SubjectBoxWrap;
