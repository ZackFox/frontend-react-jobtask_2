import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ProfileComponent from "./components/ProfileComponent";
import NewsComponent from "./components/NewsComponent";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="top-menu">
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/news">Новости</Link>
            <Link to="/login">Логин</Link>
          </div>
        </header>

        <main>
          <h1 className="App-title">Welcome</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={NewsComponent} />
            <Route path="/login" component={Login} />
            <Route path="/profile/:id" component={ProfileComponent} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
