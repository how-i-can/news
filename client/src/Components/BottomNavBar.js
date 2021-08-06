import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Account from "@material-ui/icons/Person";
import AppBar from "@material-ui/core/AppBar";
import Grade from "@material-ui/icons/Grade";
import Home from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

const styles = () => ({
  appBar: {
    position: "fixed",
    backgroundColor: "white",
    top: "auto",
    bottom: 0,
  },
  toolBar: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

class BottomNavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton onClick={this.props.loadDefaultNewsArticlesProp}>
            <Home />
          </IconButton>
          <IconButton>
            <Grade />
          </IconButton>
          <IconButton>
            <Account />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavBar);
