import React from "react";
import "./BingoBackground.css";
import BingoTable from "../BingoTable/BingoTable";
import BingoListContainer from "../../containers/BingoListContainer";

const BingoBackground = ({ playerList, onShuffle }) => {
  const bingo = playerList.map((player, i) => {
    return (
      <div>
        <div className="player-id">{player.ID}</div>
        <div key={i} className="bingo-background">
          <BingoTable tableData={player.tableData} />
        </div>
        <BingoListContainer index={i} />
      </div>
    );
  });
  return bingo;
};

export default BingoBackground;
