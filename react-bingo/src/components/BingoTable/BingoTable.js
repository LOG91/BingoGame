import React from "react";
import Cell from "../Cell";
import "./BingoTable.css";

const BingoTable = ({ tableData }) => {
  const bingoTable = tableData.map((item, i) => <Cell key={i} item={item} />);
  return <div className="bingo-table">{bingoTable}</div>;
};

export default BingoTable;
