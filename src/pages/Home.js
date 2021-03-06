import { useState, useContext } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { Helmet } from "react-helmet-async";
import Destinations from "../components/Destinations";
import Services from "../components/servies/Services";
import Reviews from "../components/reviews/Reviews";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer"
const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: " We are travel friends",
    paragraph:
      " Come and join us we travel the most famous and beautiful places in the world.",
  });

  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");

  

  return (
    <div>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to the world with travel friends"
        ></meta>
        <meta name="keywords" content="travel, travel tours, airline"></meta>
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
        >
          Get Started
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      <Destinations />
      <Services />
      <Reviews />
      <Gallery />
      <Footer />
      
    </div>
  );
};
export default Home;
