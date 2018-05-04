import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";

import ProfileContainer from "./containers/ProfileContainer";
import Login from "./components/Login";
import NewsList from "./components/NewsList";
import NotFound from "./components/NotFound";
import SignButton from "./components/SignButton";

class App extends Component {
  render() {
    return (
      <div className="App">
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

        <main>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={NewsList} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={ProfileContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
