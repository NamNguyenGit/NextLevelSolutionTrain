import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/PageContainer";
const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora voluptate a laborum sed placeat magnam adipisci perspiciatis est illo alias enim, ad modi eos cupiditate officia quas repellat accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora voluptate a laborum sed placeat magnam adipisci perspiciatis est illo alias enim, ad modi eos cupiditate officia quas repellat accusamus.",
  });

  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about  page "></meta>
      </Helmet>
      <PageContainer  data={state} />
    </>
  );
};
export default About;
