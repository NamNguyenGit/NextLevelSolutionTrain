import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm"
const Contact = () => {
  const [state] = useState({
    heading: "contact us",
    pageHeading: "leave your message in the contact form",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora voluptate a laborum sed placeat magnam adipisci perspiciatis est illo alias enim, ad modi eos cupiditate officia quas repellat accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora voluptate a laborum sed placeat magnam adipisci perspiciatis est illo alias enim, ad modi eos cupiditate officia quas repellat accusamus.",
  });

  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="travel friends contact page "></meta>
      </Helmet>
      <PageContainer data={state}> <ContactForm /> </PageContainer>
    </>
  );
};

export default Contact;
