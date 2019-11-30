import "../../styles/BtnContainer.scss";

import React from "react";
import Btn from "./Btn";

const BtnContainer = () => {
  return (
    <div className="btn__container">
      <div className="btn__row">
        <Btn type={"CE"} />
        <Btn type={"C"} />
        <Btn type={"X"} />
        <Btn type={"/"} />
      </div>
      <div className="btn__row">
        <Btn type={"7"} />
        <Btn type={"8"} />
        <Btn type={"9"} />
        <Btn type={"X"} />
      </div>
      <div className="btn__row">
        <Btn type={"4"} />
        <Btn type={"5"} />
        <Btn type={"6"} />
        <Btn type={"-"} />
      </div>
      <div className="btn__row">
        <Btn type={"1"} />
        <Btn type={"2"} />
        <Btn type={"3"} />
        <Btn type={"+"} />
      </div>
      <div className="btn__row">
        <Btn type={"+/-"} />
        <Btn type={"0"} />
        <Btn type={"."} />
        <Btn type={"="} />
      </div>
    </div>
  );
};

export default BtnContainer;
