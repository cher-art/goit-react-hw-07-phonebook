import { combineReducers } from "redux";
import contacts from "./contactReducer";
import filter from "./filterReducer";
import alert from "./alertReducer";
const rootRreducer = combineReducers({
  alert,
  contacts,
  filter,
});

export default rootRreducer;
