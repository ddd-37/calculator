import "../../styles/MainDisplay.scss";
import React from "react";
import TopLevelDisplay from "./TopLevelDisplay/TopLevelDisplay";
import BttmLevelDisplay from "./BttmLevelDisplay/BttmLevelDisplay";

const MainDisplay = () => {
  return (
    <div className="main-display">
      <TopLevelDisplay />
      <BttmLevelDisplay />
    </div>
  );
};

export default MainDisplay;
