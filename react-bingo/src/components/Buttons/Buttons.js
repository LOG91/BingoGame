import React from "react";
import "./Buttons.css";

const Buttons = onStart => {
  return (
    <div className="btn-start" onClick={onStart}>
      Button
    </div>
  );
};

export default Buttons;
