import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import {CLOSE_TOGGLE} from "../context/types/NavTypes"
const Nav = () => {
  const { state, dispatch } = useContext(NavContext);
  const navClose = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "navLayer") {
      dispatch({type: CLOSE_TOGGLE })
    }
  };
  return (
    <>
      {state ? <div className="navLayer" onClick={navClose}></div> : ""}

      <div className={state ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Nav;
