import { EDIT_FILTER, CLEAR_FILTER } from "../ducks/index";

const initialState = "";

const filter = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FILTER:
      return action.payload;
    case CLEAR_FILTER:
      return "";
    default:
      return state;
  }
};

export default filter;
