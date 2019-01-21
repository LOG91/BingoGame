import * as types from "./ActionTypes";

export const shuffle = () => ({
  type: types.SHUFFLE
});
export const erase = num => ({
  type: types.ERASE,
  num
});
