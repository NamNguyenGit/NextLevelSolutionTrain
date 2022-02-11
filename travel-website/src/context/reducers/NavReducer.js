import { NAV_TOGGLE } from "../types/NavTypes";
import {CLOSE_TOGGLE} from "../types/NavTypes"
const NavReducer = (state, action) => {
  if (action.type === NAV_TOGGLE) {
    return !state;
  } else if (action.type === CLOSE_TOGGLE) {
    return !state;
  } 
  else {
    return state;
  }
};

export default NavReducer;
