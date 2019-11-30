import "../../styles/MainDisplay.scss";
import React from "react";
import TopLevelDisplay from "./TopLevelDisplay/TopLevelDisplay";
import BttmLevelDisplay from "./BttmLevelDisplay/BttmLevelDisplay";

const MainDisplay = ({ bttmDisplay, topDisplay }) => {
  return (
    <div className="main-display">
      <TopLevelDisplay topDisplay={topDisplay} />
      <BttmLevelDisplay bttmDisplay={bttmDisplay} />
    </div>
  );
};

export default MainDisplay;
