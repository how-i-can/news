import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { PermMedia, Label } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
  CreatePost: {
    display: "flex",
    alignItems: "center",
    padding: 30,
    height: 170,
    borderRadius: 10,
    webkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
  },
  pageTitle: {
    display: "inline-flex",
    fontFamily: "Lato",
    textAlign: "center",
    fontSize: 20,
  },
  postTop: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    fontFamily: "Lato",
  },
  postProfileImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 10,
  },
  postInput: {
    border: "none",
    width: "100%",
    fontFamily: "Lato",
  },
  postBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween",
  },
  postOptions: {
    display: "flex",
    marginLeft: 20,
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
    backgroundColor: "grey",
    fontFamily: "Lato",
    fontWeight: 500,
    marginRight: 20,
    cursor: "pointer",
    color: "black",
  },
});

class CreatePost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <div className={classes.createPost}>
          <h1 className={classes.pageTitle}>Create a New Post</h1>
          <div className={classes.postTop}>
            <img className={classes.postProfileImg} src="" alt="" />
            <textarea
              placeholder="What made you smile today? Share it with your friends and family."
              className={classes.postInput}
            />
          </div>
          <div className={classes.postBottom}>
            <div className={classes.postOptions}>
              <div className={classes.postOption}>
                <PermMedia htmlColor="tomato" className={classes.postIcon} />
                <span className={classes.postOptionText}>Add a Photo</span>
              </div>
              <div className={classes.shareOption}>
                <Label htmlColor="blue" className={classes.postIcon} />
                <span className={classes.postOptionText}>
                  Everyone can view
                </span>
              </div>
            </div>
            <button className={classes.postButton}>Post to My Wall</button>
          </div>
        </div>
      </Paper>
    );
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
