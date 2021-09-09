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

const styles = () => ({
  MyWallPage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100vw",
  },
  MyWallPageMain: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
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
    display: "flex",
    flexGrow: 1,
    maxHeight: "100%",
    maxWidth: "100",
    margin: "0 auto",
    height: 300,
    width: 300,
    padding: 10,
  },
  fabButton: {
    position: "fixed",
    bottom: 70,
    right: 20,
    color: "blue",
    backgroundColor: "#FED96E",
  },
  BottomNavBar: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

class MyWallPage extends Component {
  state = { showCreatePost: true };

  handleCreatePostModalOpen = () => {
    const showModalUpdate = !this.state.showCreatePost;
    this.setState({ showCreatePost: showModalUpdate });
  };

  handleCreatePostModalClose = () => {
    const showModalUpdate = !this.state.showCreatePost;
    this.setState({ showCreatePost: showModalUpdate });
  };

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
            {this.state.showCreatePost && (
              <CreatePost data={this.handleCreatePostModalClose} />
            )}
            <h1 className={classes.userName}>Jessica Brown</h1>
            <p>Post good things that happened to you.</p>
          </div>
          <MyWallFilter />
          <div className={classes.defaultGreeting}>
            <h1>Your happy moments will show up here!</h1>
            <p>For only you to see. It can be anything that makes you happy.</p>
          </div>

          <div className={classes.myWallHeart}>
            <img
              src="https://www.nicepng.com/png/full/815-8150281_blue-and-green-flower-heart-heart-flower-blue.png"
              alt=""
            />
          </div>
        </div>
        <BottomNavBar className={classes.BottomNavBar} />

        <Fab
          color="primary"
          aria-label="add"
          className={classes.fabButton}
          onClick={this.handleCreatePostModalOpen}
        >
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
