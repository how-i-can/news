import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPage from "./LandingPage";
import Registration from "./Registration";
import Login from "./Login";
import MyWallPage from "./MyWallPage";
import CommunityWallPage from "./CommunityWallPage";
import Logout from "./Logout";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import AccountSettings from "./AccountSettings";
import AccountDeleted from "./AccountDeleted";
import Password from "./Password";

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
              <Route path="/mywall">
                <MyWallPage />
              </Route>
              <Route path="/community">
                <CommunityWallPage />
              </Route>
              <Route path="/signup">
                <Registration />
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
              <Route path="/editprofile">
                <EditProfile />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/accountsettings">
                <AccountSettings />
              </Route>
              <Route path="/accountdeleted">
                <AccountDeleted />
              </Route>
              <Route path="/password">
                <Password />
              </Route>
              <Logout />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
