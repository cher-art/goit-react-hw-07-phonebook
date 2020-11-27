import { createReducer } from "@reduxjs/toolkit";
import { EDIT_FILTER, CLEAR_FILTER } from "../../redux/ducks/index";

const initialState = "";

export const filterReducerTool = createReducer(initialState, {
  [EDIT_FILTER]: (state, action) => action.payload,
  [CLEAR_FILTER]: (state, action) => "",
});
