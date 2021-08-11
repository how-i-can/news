import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import BottomNavBar from "./BottomNavBar";
import MyWallPosts from "./MyWallPosts";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

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
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  searchIcon: {
    float: "right",
    marginTop: -100,
    paddingRight: 10,
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
          <div className={classes.pageTop}>
            <h1>Cathy Zen</h1>
            <h5>Good news from around the world.</h5>
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

MyWallPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyWallPage);
