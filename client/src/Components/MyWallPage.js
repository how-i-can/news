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
import MyWallFilter from "./MyWallFilter.js";
import CreatePost from "./CreatePost.js";

import "../images/my_wall_heart.jpg";

const styles = () => ({
  MyWallPage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100vw",
    padding: 0,
  },
  MyWallPageMain: {
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
  myWallHeart: {
    width: 20,
    marginRight: 4,
  },
  fabButton: {
    position: "fixed",
    bottom: 70,
    right: 20,
    color: "blue",
    backgroundColor: "#FED96E",
  },
});

class MyWallPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.MyWallPage}>
        <div className={classes.MyWallPageMain}>
          <div className={classes.menuIcon}>
            <MenuIcon />
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.pageTop}>
            <h1 className={classes.userName}>Cathy Zen</h1>
            <p>Post good things that happened to you.</p>
          </div>
          <MyWallFilter />
          <div className={classes.defaultGreeting}>
            <h1>Your happy moments will show up here!</h1>
            <p>For only you to see. It can be anything that makes you happy.</p>
          </div>
          {/* <img src="../images/my_wall_heart.jpg" alt="heart"></img> */}
          <CreatePost />
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

MyWallPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyWallPage);
