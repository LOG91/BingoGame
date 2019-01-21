import BingoList from "../components/BingoList/BingoList";
import * as actions from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state, { index }) => {
  return {
    bingoList: state.playerList[index].bingo
  };
};

const mapDispatchToProps = dispatch => ({
  onErase: ({ target }) => dispatch(actions.erase(target.innerHTML))
});

const BingoListContainer = connect(mapStateToProps)(BingoList);

export default BingoListContainer;
