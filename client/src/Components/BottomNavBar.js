import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import { ListItemIcon } from "@material-ui/core";
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  },
  pageLabel: {
    display: "flex",
    fontSize: 14,
    fontFamily: "Lato",
    flexDirection: "column",
  },
});

class BottomNavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <ListItemIcon className={classes.iconButton}>
            <PersonOutlineOutlinedIcon />
            <span className={classes.pageLabel}>My Wall</span>
          </ListItemIcon>
          <ListItemIcon
            className={classes.iconButton}
            onClick={this.props.loadDefaultNewsArticlesProp}
          >
            <ImportContactsOutlinedIcon />
            <span className={classes.pageLabel}>News</span>
          </ListItemIcon>
          <ListItemIcon className={classes.iconButton}>
            <PeopleOutlineOutlinedIcon />
            <span className={classes.pageLabel}>Community</span>
          </ListItemIcon>
          <ListItemIcon className={classes.iconButton}>
            <WbSunnyOutlinedIcon />
            <span className={classes.pageLabel}>NGOs</span>
          </ListItemIcon>
        </Toolbar>
      </AppBar>
    );
  }
}

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavBar);
