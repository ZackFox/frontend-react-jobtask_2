import React from "react";
import { NavLink } from "react-router-dom";
import SignButton from "./SignButton";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="selected">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="selected">
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" activeClassName="selected">
                Новости
              </NavLink>
            </li>
          </ul>
          <SignButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
