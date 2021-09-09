import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import Button from "./Button.js";

const styles = () => ({
  CreatePost: {
    zIndex: 2000,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    margin: "0 auto",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
  pageTitle: {
    display: "inline-flex",
    textAlign: "center",
    alignItems: "center",
    margin: "0 auto",
    fontFamily: "Lato",
    fontSize: 22,
    padding: 20,
  },
  cancelOption: {
    display: "flex",
    alignItems: "top",
    cursor: "pointer",
    color: "gray",
    fontFamily: "Lato",
  },
  postTop: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    height: "100%",
    width: "100%",
    borderStyle: "solid",
    borderColors: "gray",
    fontFamily: "Lato",
    fontSize: 22,
  },
  postProfileImg: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginRight: 10,
    padding: 5,
  },
  postInput: {
    display: "flex",
    fontFamily: "Lato",
    fontSize: 18,
    position: "relative",
    width: "100%",
    height: "100%",
    border: "none",
    resize: "none",
  },
  postBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "spaceBetween",
  },
  postOptions: {
    display: "flex",
    flexDirection: "column",
  },
  postOption: {
    display: "flex",
    marginRight: 15,
    padding: 5,
  },
  postIcon: {
    fontFamily: "Lato",
    fontSize: 18,
    marginRight: 3,
    cursor: "pointer",
  },
  postOptionText: {
    fontFamily: "Lato",
    fontSize: 18,
    fontWeight: 500,
  },
  postButton: {
    border: "none",
    padding: 20,
    borderRadius: 5,
    margin: 20,
    width: "95%",
    backgroundColor: "grey",
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: 18,
    marginRight: 20,
    cursor: "pointer",
    color: "black",
  },
});

class CreatePost extends Component {
  state = { showCreatePost: false };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.CreatePost}>
        <div className={classes.cancelOption} onClick={this.props.data}>
          <CloseIcon className={classes.cancelIcon} />
          <span className={classes.cancelOptionText}>Cancel</span>
        </div>
        <h1 className={classes.pageTitle}>Create New Post</h1>
        <div className={classes.postTop}>
          <img
            className={classes.postProfileImg}
            src="https://images.unsplash.com/photo-1625520306193-027951953dbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxnaXJsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <span>Jessica Brown</span>
          <textarea
            className={classes.postInput}
            placeholder="What made you smile today? Share it with your friends and family."
          />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postOptions}>
            <div className={classes.postOption}>
              <span className={classes.postOptionText}>Add a Photo </span>
              <InsertPhotoIcon className={classes.postIcon} />
            </div>
            <div className={classes.postOption}>
              <span className={classes.postOptionText}>Everyone can view </span>
              <PublicIcon className={classes.postIcon} />
            </div>
          </div>
          <Button>Post to My Wall</Button>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
