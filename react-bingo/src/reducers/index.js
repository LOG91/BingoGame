import * as types from "../actions/ActionTypes";

const initialState = {
  playerList: [
    {
      ID: "whale",
      tableData: ["1", "2", "3", "4", "5", "6"],
      complete: []
    },
    {
      ID: "log91",
      tableData: [],
      complete: []
    }
  ]
};
function counter(state = initialState, action) {
  switch (action.type) {
    case types.SHUFFLE:
      return {
        ...state,
        option: "hello"
      };
    default:
      return state;
  }
  return state;
}

export default counter;
