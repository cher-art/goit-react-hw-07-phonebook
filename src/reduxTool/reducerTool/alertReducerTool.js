import { createReducer } from "@reduxjs/toolkit";
import { ALERT_ON, ALERT_OFF } from "../../redux/ducks/index";

const initialState = false;

export const alertReducerTool = createReducer(initialState, {
  [ALERT_ON]: (state, action) => true,
  [ALERT_OFF]: (state, action) => false,
});
