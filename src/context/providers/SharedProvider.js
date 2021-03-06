import { useReducer } from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducers/SharedReducer";
import services from "../../data/services";
import reviews from "../../data/reviews";


const SharedProvider = (props) => {
    const [ sharedData, dispatch] = useReducer(SharedReducer, {
        servicesData: services,
        reviewData: reviews,
      
    });
    return (
        <SharedContext.Provider value={{sharedData, dispatch}}>
            {props.children}
        </SharedContext.Provider>
    )
} 
export default SharedProvider;