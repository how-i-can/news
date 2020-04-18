import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Account from "@material-ui/icons/Person";
import AppBar from "@material-ui/core/AppBar";
import Grade from "@material-ui/icons/Grade";
import Home from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  appBar: {
    display: "flex",
    position: "relative",
    backgroundColor: "#87BCBF",
    flexGrow: 1,
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
});

class BottomAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={this.props.loadDefaultNewsArticles}>
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

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
