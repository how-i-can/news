import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import BottomNavBar from "./BottomNavBar";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommunityWallFilter from "./CommunityWallFilter";

const styles = () => ({
  CommunityWallPage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100vw",
    padding: 0,
  },
  CommunityWallPageMain: {
    flexGrow: 1,
  },
  menuIcon: {
    float: "left",
    padding: 10,
  },
  pageTop: {
    display: "table",
    position: "relative",
    margin: "auto",
    float: "none",
    fontFamily: "Lato",
  },
  userName: {
    fontWeight: "bold",
  },
  searchIcon: {
    float: "right",
    right: 20,
    top: 0,
    padding: 10,
  },
  defaultGreeting: {
    display: "inline-block",
    textAlign: "left",
    fontFamily: "Lato",
    paddingLeft: 20,
  },
  fabButton: {
    position: "fixed",
    bottom: 70,
    right: 20,
    color: "blue",
    backgroundColor: "#FED96E",
  },
});

class CommunityWallPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.CommunityWallPage}>
        <div className={classes.CommunityWallPageMain}>
          <div className={classes.menuIcon}>
            <MenuIcon />
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.pageTop}>
            <h1 className={classes.userName}>Community</h1>
            <p>Get inspired by others' positive work.</p>
          </div>
          <CommunityWallFilter />
        </div>
        <BottomNavBar className={classes.BottomNavBar} />
        <Fab color="primary" aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Paper>
    );
  }
}

CommunityWallPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityWallPage);
