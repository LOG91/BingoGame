import Cell from "../components/Cell/Cell";
import * as actions from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  playerList: state.playerList
});

const mapDispatchToProps = dispatch => ({
  onErase: ({ target }) => dispatch(actions.erase(target.innerHTML))
});

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;
