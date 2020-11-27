import { createAction } from "@reduxjs/toolkit";
import { EDIT_FILTER, CLEAR_FILTER } from "../../redux/ducks/index";

export const editFilterActionTool = createAction(EDIT_FILTER);
export const clearFilterActionTool = createAction(CLEAR_FILTER);
