import React from "react";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import png1 from "../img/perfumee.png";
import { useSelector } from "react-redux";

export default function TheNavbar() {
  const cart = useSelector((state) => state.cart.value);
  return (
    <div className="container">
      <div className="navMenu">
        <nav className="navbar navbar-expand-lg main-nav px-0 ">
          <Link className="navbar-brand  navImg" to="home">
            <img src={png1} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="icon-bar icon-bar-1"></span>
        <span className="icon-bar icon-bar-2"></span>
        <span className="icon-bar icon-bar-3"></span> */}
            <FiMenu />
          </button>
          <div className="collapse navbar-collapse  " id="mainMenu">
            <ul className="navbar-nav ml text-uppercase f1  navPad">
              <li>
                <Link to="/home" className="active ">
                  home
                </Link>
              </li>
              <li>
                <Link to="/women">Womens</Link>
              </li>
              <li>
                <Link to="/men">Mens</Link>
              </li>
              {/* <li>
                <Link to="brand">Brand's</Link>
              </li> */}
              <li>
                <Link to="/cart">
                  <ImCart />
                </Link>
                <spam> {cart.length}</spam>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
