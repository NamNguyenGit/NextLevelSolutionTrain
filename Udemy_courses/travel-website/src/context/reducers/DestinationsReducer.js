import { destinations } from "../../data/destinations";
import { DETAILS } from "../types/DestinationsType";

const DestinationsReducer = (state, action) => {
  const { type, payload } = action;
  console.log(typeof payload);
  if (type === DETAILS) {
    const destination = state.destinations.find(
      (destination) => destination.id === parseInt(payload)
    );
    return {
      ...state,
      details: destination,
    };
  } else {
    return { state };
  }
};
export default DestinationsReducer;
