import React from "react";
import Cell from "../Cell";
import "./BingoTable.css";
import CellContainer from "../../containers/CellContainer";

const BingoTable = ({ tableData }) => {
  console.log(tableData);
  const bingoTable = tableData.map(items =>
    items.map((item, i) => (
      <CellContainer key={i} item={item.num} isErase={item.erase} />
    ))
  );
  return <div className="bingo-table">{bingoTable}</div>;
};

export default BingoTable;
