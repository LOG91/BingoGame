import Buttons from "../components/Buttons/Buttons";
import * as actions from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isStart: state.started,
  playerList: state.playerList
});

const mapDispatchToProps = dispatch => ({
  onShuffle: () => dispatch(actions.shuffle())
});

const ButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);

export default ButtonsContainer;
