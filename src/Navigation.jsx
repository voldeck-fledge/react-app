import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from './header/UserMenu';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navigation
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lookup">
                  Lookup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vote">
                  Vote
                </NavLink>
              </li>
            </ul>
            <UserMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;