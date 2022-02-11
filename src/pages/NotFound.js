import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
const NotFound = () => {
  const [state] = useState({
    heading: "Opps, 404",
    paragraph: "Sorry, the page you are looking for does not exist.",
    image: "assets/images/404.jpg",
  });
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="travel friends not found"></meta>
      </Helmet>
      <Header
        heading={state.heading}
        image={state.image}
        paragraph={state.paragraph}
      >
        <Link to="/" className="btn-default">
          go to home
        </Link>
      </Header>
    </>
  );
};

export default NotFound;
