import "./styles/Calculator.scss";
import React from "react";
import MainDisplay from "./components/display/MainDisplay";
import BtnContainer from "./components/btns/BtnContainer";

class Calculator extends React.Component {
  state = {
    bttmDisplay: "0",
    topDisplay: null,
    total: null
  };

  handleBtnNumClick = num => {
    console.log("click");

    let newBttmDisplay = this.state.bttmDisplay + `${num}`;

    // Remove the first number if it's a zero
    if (newBttmDisplay.charAt(0) === "0") {
      newBttmDisplay = newBttmDisplay.substr(1);
      console.log("TCL: Calculator -> newBttmDisplay", newBttmDisplay);
    }

    //

    this.setState({
      bttmDisplay: newBttmDisplay
    });
  };

  handleOperatorClick = opr => {
    // If topDisplay is null, remove null and replace with value
    let newTopDisplay;
    if (!this.state.topDisplay) {
      newTopDisplay = this.state.bttmDisplay + opr;
      this.setState({
        topDisplay: newTopDisplay
      });
      return;
    }

    newTopDisplay = this.state.topDisplay + opr;
    this.setState({
      topDisplay: newTopDisplay
    });
  };

  render() {
    return (
      <div className="calculator">
        <MainDisplay
          bttmDisplay={this.state.bttmDisplay}
          topDisplay={this.state.topDisplay}
        />
        <BtnContainer
          handleBtnNumClick={this.handleBtnNumClick}
          handleOperatorClick={this.handleOperatorClick}
        />
      </div>
    );
  }
}

export default Calculator;
