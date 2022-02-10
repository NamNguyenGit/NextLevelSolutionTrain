import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS } from "../context/types/DestinationsType";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  console.log(destinationsData.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
  }, [id]);

  return <h1>Details {id} </h1>;
};

export default Details;
