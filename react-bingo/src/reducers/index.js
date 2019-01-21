import * as types from "../actions/ActionTypes";
const numberFormatting = arr => {
  const reduced = arr.reduce(
    (acc, cv, idx) => {
      acc.tmp.push({ num: cv, erase: false });
      if ((idx + 1) % 5 === 0) {
        acc.row.push(acc.tmp);
        acc.tmp = [];
        return acc;
      }
      return acc;
    },
    { tmp: [], row: [] }
  );
  return reduced.row;
};
const initialState = {
  started: false,
  playerList: [
    {
      ID: "whale",
      tableData: numberFormatting([...Array(25)].map(v => "")),
      bingo: []
    },
    {
      ID: "log91",
      tableData: numberFormatting([...Array(25)].map(v => "")),
      bingo: []
    }
  ]
};

const shuffle = arr => {
  let ctr = arr.length,
    temp,
    index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

function exploreArr(arr, target) {
  let newArr = [...arr];
  let low = null;
  arr.forEach((items, i) =>
    items.forEach((item, j) => {
      if (item.num === +target) {
        newArr[i][j].erase = true;
        low = i;
      }
    })
  );
  return [newArr, low];
}
function counter(state = initialState, action) {
  const { playerList } = state;
  switch (action.type) {
    case types.SHUFFLE:
      const shuffled = shuffle([...Array(25)].map((v, i) => ++i));
      const formmated = numberFormatting(shuffled);
      const shuffled2 = shuffle([...Array(25)].map((v, i) => ++i));
      const formmated2 = numberFormatting(shuffled2);
      return {
        started: true,
        playerList: [
          {
            ID: playerList[0].ID,
            tableData: formmated,
            bingo: []
          },
          {
            ID: playerList[1].ID,
            tableData: formmated2,
            bingo: []
          }
        ]
      };
    case types.ERASE:
      if (!state.started) return;
      const [newArr, lowData] = exploreArr(playerList[0].tableData, action.num);
      const [newArr2, lowData2] = exploreArr(
        playerList[1].tableData,
        action.num
      );
      // playerList[1].tableData = exploreArr(playerList[1].tableData, action.num);
      let low = lowCheck(newArr, lowData);
      let low2 = lowCheck(newArr2, lowData2);
      if (low !== null) {
        playerList[0].bingo = [...playerList[0].bingo, `${low + 1}행 빙고!`];
        low = null;
      }
      if (low2 !== null) {
        playerList[1].bingo = [...playerList[1].bingo, `${low2 + 1}행 빙고!`];
        low2 = null;
      }
      return { ...state, tableData: newArr };
    default:
      return state;
  }
  return state;
}
function lowCheck(arr, num) {
  console.log(arr, num);
  if (arr[num].every(cv => cv.erase)) return num;
  else return null;
}

export default counter;
