import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_LOCAL_STORAGE,
  SET_CONTACTS,
} from "../ducks/index";

export const addContact = (objContact) => ({
  type: ADD_CONTACT,
  payload: objContact,
});
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
export const setContactLocalStorage = (array) => ({
  type: SET_LOCAL_STORAGE,
  payload: array,
});

export const setContact = (contact) => ({
  type: SET_CONTACTS,
  payload: contact,
});
