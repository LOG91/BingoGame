import React from "react";
import "./Cell.css";
const Cell = ({ item, onErase, isErase }) => {
  console.log(isErase);
  if (!isErase)
    return (
      <div className="cell" onClick={onErase}>
        {item}
      </div>
    );
  else
    return (
      <div className="cell erased" onClick={onErase}>
        {item}
      </div>
    );
};

export default Cell;
