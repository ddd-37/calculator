import "./styles/Calculator.scss";
import React from "react";
import Btn from "./components/btns/Btn";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator__container">
        <div className="display-main__container">
          <div className="display-top__container"></div>
          <div className="display-bttm__container"></div>
        </div>
        <div className="calculator-btn__container">
          <div className="calculator-btn__row">
            <Btn type={"CE"} />
            <Btn type={"C"} />
            <Btn type={"X"} />
            <Btn type={"/"} />
          </div>
          <div className="calculator-btn__row">
            <Btn type={"7"} />
            <Btn type={"8"} />
            <Btn type={"9"} />
            <Btn type={"X"} />
          </div>
          <div className="calculator-btn__row">
            <Btn type={"4"} />
            <Btn type={"5"} />
            <Btn type={"6"} />
            <Btn type={"-"} />
          </div>
          <div className="calculator-btn__row">
            <Btn type={"1"} />
            <Btn type={"2"} />
            <Btn type={"3"} />
            <Btn type={"+"} />
          </div>
          <div className="calculator-btn__row">
            <Btn type={"+/-"} />
            <Btn type={"0"} />
            <Btn type={"."} />
            <Btn type={"="} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
