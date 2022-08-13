import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-black py-3 shadow-sm">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  E-MART
                </NavLink>
              </li>
             
            </ul>
            <div className="buttons d-flex ms-2">
            
              <NavLink to="/cart" className="btn btn-outline-light ms-2">
                <i className="fa fa-shopping-cart me-1 "></i> Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;