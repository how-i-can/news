import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPage from "./LandingPage";
import Registration from "./Registration";
import Login from "./Login";

const styles = {
  root: {
    fontFamily: "Lato",
  },
  App: {
    display: "flex",
    alignItems: "center",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    console.log("AppStyles", this.props);
    return (
      <div className={classes.App}>
        <div className={classes.root}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/signup">
                <Registration />
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
