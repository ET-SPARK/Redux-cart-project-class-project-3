import React from "react";
import { useDispatch} from "react-redux";
import { authAction } from "../store/Autth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const logoutHundler = () => {
    dispatch(authAction.logOut())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button 
            onClick={logoutHundler}
            className="logout-btn">LOGOUT</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
