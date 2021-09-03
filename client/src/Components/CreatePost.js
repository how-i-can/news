import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import PropTypes from "prop-types";

const styles = () => ({
  CreatePost: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    margin: "0 auto",
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  pageTitle: {
    display: "inline-flex",
    textAlign: "center",
    alignItems: "center",
    margin: "0 auto",
    fontFamily: "Lato",
    fontSize: 20,
  },
  postTop: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    fontFamily: "Lato",
  },
  postProfileImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: 10,
  },
  postInput: {
    fontFamily: "Lato",
    width: "100%",
  },
  postBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "spaceBetween",
  },
  postOptions: {
    display: "flex",
    flexDirection: "column",
    marginLeft: -50,
  },
  postOption: {
    display: "flex",
    alignItems: "center",
    marginRight: 15,
    cursor: "pointer",
  },
  postIcon: {
    fontFamily: "Lato",
    fontSize: 18,
    marginRight: 3,
  },
  postOptionText: {
    fontFamily: "Lato",
    fontSize: 14,
    fontWeight: 500,
  },
  postButton: {
    border: "none",
    padding: 7,
    borderRadius: 5,
    margin: 20,
    width: "80%",
    backgroundColor: "grey",
    fontFamily: "Lato",
    fontWeight: 500,
    marginRight: 20,
    cursor: "pointer",
    color: "black",
  },
  textarea: {
    position: "fixed",
    left: 10,
    top: 10,
    width: "calc(100vw - 20px)",
    height: "calc(100vh - 20px)",
    resize: "none",
  },
});

class CreatePost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.CreatePost}>
        <h1 className={classes.pageTitle}>Create a New Post</h1>
        <div className={classes.postTop}>
          <img
            className={classes.postProfileImg}
            src="https://images.unsplash.com/photo-1625520306193-027951953dbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxnaXJsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <span>Jessica Brown</span>
          <p className={classes.postInput}>
            What made you smile today? Share it with your friends and family.
          </p>
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postOptions}>
            <div className={classes.postOption}>
              <span className={classes.postOptionText}>Add a Photo</span>
              <InsertPhotoIcon className={classes.postIcon} />
            </div>
            <div className={classes.postOption}>
              <span className={classes.postOptionText}>Everyone can view</span>
              <PublicIcon className={classes.postIcon} />
            </div>
          </div>
          <button className={classes.postButton}>Post to My Wall</button>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
