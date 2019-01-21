import React from "react";
import "./Buttons.css";

const Buttons = ({ isStart, onShuffle }) => {
  if (isStart)
    return (
      <div className="btn-start" onClick={onShuffle}>
        Restart
      </div>
    );
  else
    return (
      <div className="btn-start" onClick={onShuffle}>
        Start
      </div>
    );
};

export default Buttons;
