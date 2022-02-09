import { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";


const Login = (props) => {
  const {dispatch} = useContext(ModelContext);
  return (
    <form>
      <div className="model__heading">
        <h3>Login</h3>
      </div>

      <div className="group">
        <input
          type="email"
          placeholder="Enter email"
          name=""
          className="group__control"
        />
      </div>
      <div className="group">
        <input
          type="password"
          placeholder="Enter password"
          name=""
          className="group__control"
        />
      </div>
      <div className="group flex space-between y-center">
        <input type="submit" value="Login" name="" className="btn-dark" />
        <span onClick={() => dispatch({type: OPEN_MODEL, payload: props.currentModel})}>Create new account?</span>
      </div>
    </form>
  );
};
export default Login;
