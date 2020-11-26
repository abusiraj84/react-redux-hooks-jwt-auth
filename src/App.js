import React from "react";
import { Router, Switch, Route, Link, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import Layout from "./components/layout/layout";
import WaveBackground from "./components/backgrounds/WaveBackground";

import CoursesPage from "./components/pages/CoursesPage";
import CoursePage from "./components/pages/CoursePage";
import InstructursPage from "./components/pages/InstructursPage";
import InstructurPage from "./components/pages/InstructurPage";
import PricesPage from "./components/pages/PricesPage";
import ShopPage from "./components/pages/ShopPage";
import Header from "./components/layout/Header";
import LessonPage from "./components/pages/LessonPage";
import ScrollToTop from "./components/ScrollToTop ";
import StarBackground from "./components/backgrounds/StarBackground";

const App = () => {
  return (
    <Router history={history}>
      <ScrollToTop>
        <div>
          <Layout />
          <StarBackground />
          <Header />

          <WaveBackground />

          <Switch>
            <Route exact path={["/", "/home"]} component={withRouter(Home)} />
            <Route exact path="/login" component={withRouter(Login)} />
            <Route exact path="/register" component={withRouter(Register)} />
            <Route exact path="/profile" component={withRouter(Profile)} />

            <Route exact path="/courses" component={withRouter(CoursesPage)} />
            <Route exact path="/course" component={withRouter(CoursePage)} />
            <Route
              exact
              path="/course/:id"
              component={withRouter(CoursePage)}
            />
            <Route
              exact
              path="/lesson/:id"
              component={withRouter(LessonPage)}
            />

            <Route
              exact
              path="/instructurs"
              component={withRouter(InstructursPage)}
            />
            <Route
              exact
              path="/instructur"
              component={withRouter(InstructurPage)}
            />
            <Route exact path="/prices" component={withRouter(PricesPage)} />
            <Route exact path="/shop" component={withRouter(ShopPage)} />
          </Switch>
        </div>{" "}
      </ScrollToTop>
    </Router>
  );
};

export default App;
