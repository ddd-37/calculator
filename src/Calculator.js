import "./styles/Calculator.scss";
import React from "react";
import MainDisplay from "./components/display/MainDisplay";
import BtnContainer from "./components/btns/BtnContainer";

class Calculator extends React.Component {
  state = {
    bttmDisplay: "0",
    oprClick: false, // Use this to test if the last button clicked was an operator
    topDisplay: null,
    total: null
  };

  handleBtnNumClick = num => {
    console.log("click");

    let newBttmDisplay = this.state.bttmDisplay;

    // Remove the first number if it's a zero
    if (newBttmDisplay.charAt(0) === "0") {
      newBttmDisplay = newBttmDisplay.substr(1);
      console.log("TCL: Calculator -> newBttmDisplay", newBttmDisplay);
    }

    // If an operator was the last click, we need a new bottom display
    if (this.state.oprClick) {
      this.setState({
        bttmDisplay: newBttmDisplay,
        oprClick: false
      });
      return;
    }

    newBttmDisplay = this.state.bttmDisplay + `${num}`;
    this.setState({
      bttmDisplay: newBttmDisplay,
      oprClick: false
    });
  };

  handleOperatorClick = opr => {
    // If topDisplay is null, remove null and replace with value
    let newTopDisplay;
    if (!this.state.topDisplay) {
      newTopDisplay = this.state.bttmDisplay + opr;
      this.setState({
        oprClick: true,
        topDisplay: newTopDisplay
      });
      return;
    }

    newTopDisplay = this.state.topDisplay + opr;
    this.setState({
      oprClick: true,
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
