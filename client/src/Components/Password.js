import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "./Button.js";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = () => ({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: 50,
    height: "auto",
    width: "100vw",
  },
  profileCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    margin: "0 auto",
    padding: 50,
    height: "100%",
    width: "100%",
  },
  PasswordLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 800,
  },
  currentPassword: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "left",
    height: "50",
  },
  passwordEditLabel: {
    display: "inline",
    justifyContent: "left",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
  },
  inputBox: {
    backgroundColor: "#F6F6F6",
    border: "none",
    margin: 10,
    fontFamily: "Lato",
    fontSize: 16,
  },
  newPassword: {
    display: "inline-flex",
    flexDirection: "column",
  },
  confirmPassword: {
    display: "inline-flex",
    flexDirection: "column",
  },
  arrowBackIcon: {
    cursor: "pointer",
  },
});

class Password extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Profile}>
        <Card className={classes.profileCard}>
          <ArrowBackIcon className={classes.arrowBackIcon} />
          <div>
            <h4 className={classes.PasswordLabel}>Password</h4>
          </div>
          <form className={classes.currentPassword}>
            <label for="inputBox" className={classes.passwordEditLabel}>
              Current Password
            </label>
            <input
              className={classes.inputBox}
              name="currentPassword"
              type="password"
              value="1234567"
            />
          </form>
          <form className={classes.newPassword}>
            <label for="inputBox" className={classes.passwordEditLabel}>
              New Password
            </label>
            <input
              className={classes.inputBox}
              name="newPassword"
              type="password"
              value="1234567890"
            />
          </form>
          <form className={classes.confirmPassword}>
            <label for="inputBox" className={classes.passwordEditLabel}>
              Confirm Password
            </label>
            <input
              className={classes.inputBox}
              name="confirmPassword"
              type="password"
              value="1234567890"
            />
          </form>
          <Button>Update Password</Button>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Password);
