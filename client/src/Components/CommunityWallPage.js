import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import BottomNavBar from "./BottomNavBar";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

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
    marginTop: -100,
    paddingRight: 10,
  },
  defaultGreeting: {
    display: "inline-block",
    textAlign: "left",
    fontFamily: "Lato",
    paddingLeft: 20,
  },
  CommunityWallHeart: {
    width: 20,
    marginRight: 4,
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
          <div className={classes.pageTop}>
            <h1 className={classes.userName}>Community</h1>
            <p>Get inspired by others' positive work.</p>
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <BottomNavBar className={classes.BottomNavBar} />
      </Paper>
    );
  }
}

CommunityWallPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityWallPage);
