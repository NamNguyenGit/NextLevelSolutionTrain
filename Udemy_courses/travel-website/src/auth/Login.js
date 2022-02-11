import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";


const Login = (props) => {
  const {dispatch} = useContext(ModelContext);
  const [state,setState] = useState({
    email:"",
    password:""
  })
  const loginForm = (e) => {
    e.preventDefault();
    console.log(state)
  }
  return (
    <form onSubmit={loginForm}>
      <div className="model__heading">
        <h3>Login</h3>
      </div>

      <div className="group">
        <input
          type="email"
          placeholder="Enter email"
          name=""
          className="group__control"
          onChange={(e) => 
            setState({
              ...state, email:e.target.value,
            })
          }
          value={state.email}
        />
      </div>
      <div className="group">
        <input
          type="password"
          placeholder="Enter password"
          name=""
          className="group__control"
          onChange={(e) => 
            setState({
              ...state, password:e.target.value,
            })
          }
          value={state.password}
        />
      </div>
      <div className="group model__row">
        <input type="submit" value="Login" name="" className="btn-dark" />
        <span onClick={() => dispatch({type: OPEN_MODEL, payload: props.currentModel})}>Create new account?</span>
      </div>
    </form>
  );
};
export default Login;
