import { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
const Home = () => {
  const { dispatch } = useContext(ModelContext);

  const [state] = useState({
    heading: " We are travel friends",
    paragraph:
      " Come and join us we travel the most famous and beautiful places in the world.",
  });
  return (
    <div>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL })}
        >
          Get Started
        </button>
      </Header>
      <Model />
    </div>
  );
};
export default Home;
