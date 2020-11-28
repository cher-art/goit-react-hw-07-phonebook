import { combineReducers } from "redux";
import { contacts } from "./contactReducer";
import { filter } from "../reducer/filterReducer";
import { isAlert } from "../reducer/alertReducer";
import loader from "../reducer/loaderReducer";
const rootRreducer = combineReducers({
  contacts,
  filter,
  isAlert,
  loader,
});

export default rootRreducer;
