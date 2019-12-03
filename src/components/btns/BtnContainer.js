import "../../styles/BtnContainer.scss";

import React from "react";
import Btn from "./Btn";

const BtnContainer = ({ handleBtnNumClick, handleOperatorClick }) => {
  return (
    <div className="btn__container">
      <div className="btn__row">
        <Btn type={"CE"} />
        <Btn type={"C"} />
        <Btn
          handleClick={() => {
            handleOperatorClick("D");
          }}
          type={"D"}
        />
        <Btn
          handleClick={() => {
            handleOperatorClick("/");
          }}
          type={"/"}
        />
      </div>
      <div className="btn__row">
        <Btn handleClick={() => handleBtnNumClick("7")} type={"7"} />
        <Btn handleClick={() => handleBtnNumClick("8")} type={"8"} />
        <Btn handleClick={() => handleBtnNumClick("9")} type={"9"} />
        <Btn
          handleClick={() => {
            handleOperatorClick("X");
          }}
          type={"X"}
        />
      </div>
      <div className="btn__row">
        <Btn handleClick={() => handleBtnNumClick("4")} type={"4"} />
        <Btn handleClick={() => handleBtnNumClick("5")} type={"5"} />
        <Btn handleClick={() => handleBtnNumClick("6")} type={"6"} />
        <Btn
          handleClick={() => {
            handleOperatorClick("-");
          }}
          type={"-"}
        />
      </div>
      <div className="btn__row">
        <Btn handleClick={() => handleBtnNumClick("1")} type={"1"} />
        <Btn handleClick={() => handleBtnNumClick("2")} type={"2"} />
        <Btn handleClick={() => handleBtnNumClick("3")} type={"3"} />
        <Btn
          handleClick={() => {
            handleOperatorClick("+");
          }}
          type={"+"}
        />
      </div>
      <div className="btn__row">
        <Btn type={"+/-"} />
        <Btn handleClick={() => handleBtnNumClick("0")} type={"0"} />
        <Btn type={"."} />
        <Btn type={"="} />
      </div>
    </div>
  );
};

export default BtnContainer;
