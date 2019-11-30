import "./styles/Calculator.scss";
import React from "react";
import MainDisplay from "./components/display/MainDisplay";
import BtnContainer from "./components/btns/BtnContainer";

class Calculator extends React.Component {
  state = {
    topDisplay: null,
    bttmDisplay: "0"
  };

  handleBtnNumClick = num => {
    console.log("click");
    let newBttmDisplay = this.state.bttmDisplay + `${num}`;

    // Remove the first number if it's a zero
    if (newBttmDisplay.charAt(0) === "0") {
      newBttmDisplay = newBttmDisplay.substr(1);
    }

    this.setState({ bttmDisplay: newBttmDisplay });
  };

  render() {
    return (
      <div className="calculator">
        <MainDisplay
          bttmDisplay={this.state.bttmDisplay}
          topDisplay={this.state.topDisplay}
        />
        <BtnContainer handleBtnNumClick={this.handleBtnNumClick} />
      </div>
    );
  }
}

export default Calculator;
