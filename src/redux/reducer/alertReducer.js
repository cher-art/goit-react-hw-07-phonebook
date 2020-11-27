import { ALERT_ON, ALERT_OFF } from "../ducks/index";

const initialState = false;

const alert = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_ON:
      return true;
    case ALERT_OFF:
      return false;
    default:
      return state;
  }
};

export default alert;
