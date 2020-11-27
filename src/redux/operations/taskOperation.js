import axios from "axios";
import { setError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import { deleteContact, setContact } from "../action/contactAction";

const options = {
  header: {
    "Content-type": "application/json",
  },
};

export const getContactsOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get("http://localhost:2000/contacts");
    dispatch(setContact(result.data));
  } catch (error) {
    dispatch(setError("Somethong went wrong,try later"));
  } finally {
    dispatch(loaderOff());
  }
};

export const postContactsOperation = (contact) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.post("http://localhost:2000/contacts", contact, options);
  } catch (error) {
    dispatch(setError("Somethong went wrong,try later"));
  } finally {
    dispatch(loaderOff);
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:2000/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch {
    dispatch(setError("Somethong went wrong,try later"));
  } finally {
    dispatch(loaderOff());
  }
};
