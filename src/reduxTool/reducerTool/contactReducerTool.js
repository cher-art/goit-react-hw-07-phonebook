import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_CONTACT,
  DELETE_CONTECT,
  SET_LOCAL_STORAGE,
} from "../../redux/ducks/index";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const contactReducerTool = createReducer(initialState, {
  [ADD_CONTACT]: (state, action) => [
    ...state,
    { ...action.payload, id: uuidv4() },
  ],
  [DELETE_CONTECT]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [SET_LOCAL_STORAGE]: (state, action) => [...action.payload],
});
