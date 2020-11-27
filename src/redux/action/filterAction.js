import { EDIT_FILTER, CLEAR_FILTER } from "../ducks/index";

export const editFilter = (text) => ({
  type: EDIT_FILTER,
  payload: text,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER
})
