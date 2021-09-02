import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { PermMedia, Label } from "@material-ui/icons";

const styles = () => ({
  CreatePost: {
    width: "100%",
    height: 170,
    borderRadius: 10,
    webkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
  },
  postWrapper: {
    padding: 10,
  },
  postTop: {
    display: "flex",
    alignItems: "center",
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
    width: "80%",
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
    fontSize: 18,
    marginRight: 3,
  },
  postOptionText: {
    fontSize: 14,
    fontWeight: 500,
  },
  postButton: {
    border: "none",
    padding: 7,
    borderRadius: 5,
    backgroundColor: "green",
    fontWeight: 500,
    marginRight: 20,
    cursor: "pointer",
    color: "white",
  },
});

class CreatePost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="CreatePost">
        <div className="postWrapper">
          <div className="postTop">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <input
              placeholder="What made you smile today? Share it with your friends and family."
              className="postInput"
            />
          </div>
          <div className="postBottom">
            <div className="postOptions">
              <div className="postOption">
                <PermMedia htmlColor="tomato" className="postIcon" />
                <span className="postOptionText">Add a Photo</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="postIcon" />
                <span className="postOptionText">Everyone can view.</span>
              </div>
            </div>
            <button className="postButton">Post to MyWall</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePost);
