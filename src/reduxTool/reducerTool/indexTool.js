import { combineReducers } from "redux";
import { alertReducerTool } from "./alertReducerTool";
import { contactReducerTool } from "./contactReducerTool";
import { filterReducerTool } from "./filterReducerTool";

export const rootReducerTool = combineReducers({
  alert: alertReducerTool,
  contacts: contactReducerTool,
  filter: filterReducerTool,
});

export default rootReducerTool;
