import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import LoginComponent from "./components/LoginComponent";
import ProfileContainer from "./containers/ProfileContainer";
import NewsComponent from "./components/NewsComponent";
import NotFound from "./components/NotFound";
import SignButton from "./components/SignButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="top-menu">
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/news">Новости</Link>
            <SignButton />
          </div>
        </header>

        <main>
          <h1 className="App-title">Welcome</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={NewsComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/profile" component={ProfileContainer} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
