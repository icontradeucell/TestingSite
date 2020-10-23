import React from "react";

const SubjectBox = ({ symbol, name, bgcolor, modal }) => {
  const subjectBox = {
    width: modal ? "100px" : "170px",
    padding: modal ? "1rem" : "2rem 1rem",
    backgroundColor: `${bgcolor}`,
  };

  const img = {
    width: "25px",
  };

  const span = {
    fontSize: "0.7rem",
  };

  return (
    <div className='subject-box' style={subjectBox}>
      <img
        src={require(`../../assets/subjects/${symbol}Sym.png`)}
        alt={name}
        style={modal ? img : null}
      />
      <span style={modal ? span : null}>{name}</span>
    </div>
  );
};

export default SubjectBox;
