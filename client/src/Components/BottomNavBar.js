import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
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
  iconButton: {
    display: "block",
    verticalAlign: "top",
    marginTop: "8%",
    marginLeft: "0.7%",
    position: "relative",
  },
  pageHeader: {
    verticalAlign: "bottom",
    display: "inlineBlock",
    position: "absolute",
    fontSize: 14,
  },
});

class BottomNavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton>
            <PersonOutlineOutlinedIcon className={classes.iconButton} />
            <p className={classes.pageHeader}>My Wall</p>
          </IconButton>
          <IconButton onClick={this.props.loadDefaultNewsArticlesProp}>
            <ImportContactsOutlinedIcon className={classes.iconButton} />
            <p className={classes.pageHeader}>News</p>
          </IconButton>
          <IconButton>
            <PeopleOutlineOutlinedIcon className={classes.iconButton} />
            <p className={classes.pageHeader}>Community</p>
          </IconButton>
          <IconButton>
            <WbSunnyOutlinedIcon className={classes.iconButton} />
            <p className={classes.pageHeader}>NGOs</p>
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
