import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import LandingPageRoute from "../../routes/LandingPageRoute/LandingPageRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import './App.css';

export default class App extends Component {
  state = { 
    hasError: false 
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/'}
              component={LandingPageRoute}
            />
            <PublicOnlyRoute 
              path={"/register"} 
              component={RegistrationRoute} 
            />
            <PublicOnlyRoute 
              path={"/login"} 
              component={LoginRoute} 
            />
            <Route 
              component={NotFoundRoute} 
            />
          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}
