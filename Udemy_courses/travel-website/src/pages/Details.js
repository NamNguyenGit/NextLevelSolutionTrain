import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS, CITIES } from "../context/types/DestinationsType";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/Cities";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  console.log(destinationsData.details);
  const { details } = destinationsData;
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
  }, [id]);

  console.log(destinationsData.filteredCities);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
      <Cities />
    </>
  );
};

export default Details;
