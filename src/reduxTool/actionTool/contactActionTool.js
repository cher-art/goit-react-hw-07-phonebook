import { createAction } from "@reduxjs/toolkit";
import {
  ADD_CONTACT,
  DELETE_CONTECT,
  SET_LOCAL_STORAGE,
} from "../../redux/ducks/index";

export const addContactActionTool = createAction(ADD_CONTACT);
export const deleteContactActionTool = createAction(DELETE_CONTECT);
export const setContactActionTool = createAction(SET_LOCAL_STORAGE);
