import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};
export default About;
