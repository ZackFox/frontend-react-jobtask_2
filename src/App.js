import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import NewsContainer from "./containers/NewsContainer";
import ProfileContainer from "./containers/ProfileContainer";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={NewsContainer} />
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
