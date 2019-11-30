import React from "react";

const Btn = ({ type, handleClick }) => {
  return (
    <div
      className="btn"
      onClick={() => {
        handleClick(type);
      }}
    >
      {type}
    </div>
  );
};

export default Btn;
