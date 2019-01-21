import BingoBackground from "../components/BingoBackground/BingoBackground";
import * as actions from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  playerList: state.playerList
});

const mapDispatchToProps = dispatch => ({
  onShuffle: () => dispatch(actions.shuffle())
});

const BingoBackgroundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BingoBackground);

export default BingoBackgroundContainer;
