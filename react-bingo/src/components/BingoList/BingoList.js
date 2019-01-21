import React from "react";

const BingoList = ({ bingoList }) => {
  if (bingoList.length) return null;
  return (
    <ul>
      {bingoList.map(v => (
        <li>{v}</li>
      ))}
    </ul>
  );
};

export default BingoList;
