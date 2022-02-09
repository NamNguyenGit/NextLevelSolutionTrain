import { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { CLOSE_MODEL } from "../context/types/ModelTypes";
const Model = () => {
  const { state, dispatch } = useContext(ModelContext);
  const close = (e) => {
    if (e.target.getAttribute("class") === "model") {
      dispatch({ type: CLOSE_MODEL });
    }
  };
  return state.modelStatus ? (
    <div className="model" onClick={close}>
      <div className="model__body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam modi
        obcaecati nostrum incidunt reprehenderit deleniti eaque, porro optio
        eveniet aliquam distinctio ut veniam dolorum rerum in, cum, perspiciatis
        cumque et.
      </div>
    </div>
  ) : (
    ""
  );
};
export default Model;
