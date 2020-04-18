import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Account from "@material-ui/icons/Person";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
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
  //componentDidMount = () => {
  //this.props.onLoad();
  //};

  render() {
    console.log("Debug message triggered after render");
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            //{/* Debug message inside IconButton */}
            <IconButton
              onClick={() => this.props.onLoad()}
              //onClick={() => console.log("onclick debug")}
              //console.log('Triggered after onClick')
            >
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
      </React.Fragment>
    );
  }
}

/*
function BottomAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={props.onLoad()}
            //onClick={() => console.log("onclick debug")}
          >
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
    </React.Fragment>
  );
}
*/

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
