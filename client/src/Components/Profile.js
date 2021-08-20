import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  profilePhoto: {
    display: "flex",
    justifyContent: "center",
    margin: 25,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  userName: {
    display: "inline-flex",
    justifyContent: "center",
    marginRight: "auto",
    fontWeight: "bold",
  },
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <img
            className={classes.profilePhoto}
            alt=""
            src="https://images.unsplash.com/photo-1625520306193-027951953dbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxnaXJsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div>
          <h4 className={classes.userName}>Jessica Brown</h4>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Profile);
