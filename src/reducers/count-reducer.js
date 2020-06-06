import { INC, DEC } from "../actions/action-constants";
const countReducer = (currState = 0, action) => {
  switch (action.type) {
    case INC:
      return currState + 1;
    case DEC:
      return currState - 1;
    default:
      return currState;
  }
};

export default countReducer;
