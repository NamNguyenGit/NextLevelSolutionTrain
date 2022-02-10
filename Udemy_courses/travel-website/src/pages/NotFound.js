import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="travel friends not found"></meta>
      </Helmet>
      <h1>Not Found</h1>;
    </>
  );
};

export default NotFound;
