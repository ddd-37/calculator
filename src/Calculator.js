import "./styles/Calculator.scss";
import React from "react";
import MainDisplay from "./components/display/MainDisplay";
import BtnContainer from "./components/btns/BtnContainer";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <MainDisplay />
        <BtnContainer />
      </div>
    );
  }
}

export default Calculator;
