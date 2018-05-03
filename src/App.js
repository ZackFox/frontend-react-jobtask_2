import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

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
          <div className="top-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/profile">Профиль</Link>
                </li>
                <li>
                  <Link to="/news">Новости</Link>
                </li>
              </ul>
            </nav>
            <SignButton />
          </div>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={NewsList} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ProfileContainer} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
