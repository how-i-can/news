import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "./Button.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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
  profilePhoto: {
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 80,
    cursor: "pointer",
  },
  changePhoto: {
    textAlign: "center",
    cursor: "pointer",
  },
  accountSettingsLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 800,
  },
  emailAddress: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "left",
    height: "50",
  },
  accountSettingsEditsLabel: {
    display: "inline",
    justifyContent: "left",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
  },
  moreSettingsEditsLabel: {
    display: "inline",
    justifyContent: "left",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
    cursor: "pointer",
  },
  editProfile: {
    display: "inline-flex",
    margin: 18,
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "#F6F6F6",
    border: "none",
    margin: 10,
    fontFamily: "Lato",
    fontSize: 16,
  },
  editUserName: {
    display: "inline-flex",
    flexDirection: "column",
  },
  preferredLanguage: {
    display: "inline-flex",
    flexDirection: "column",
  },
  arrowRightIcon: {
    float: "right",
    marginRight: 20,
    cursor: "pointer",
  },
  deleteAccount: {
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
    aligntItems: "left",
  },
  deleteAccountMessage: {
    fontWeight: "bold",
  },
});

class AccountSettings extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Profile}>
        <Card className={classes.profileCard}>
          <div>
            <img
              className={classes.profilePhoto}
              alt=""
              src="https://images.unsplash.com/photo-1625520306193-027951953dbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxnaXJsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <div className={classes.changePhoto}>
              <span>Tap to change profile picture</span>
            </div>
          </div>
          <span className={classes.moreSettingsEditsLabel}>
            Personal Information{" "}
            <KeyboardArrowRightIcon className={classes.arrowRightIcon} />
          </span>
          <div>
            <h4 className={classes.accountSettingsLabel}>ACCOUNT SETTINGS</h4>
          </div>
          <form className={classes.emailAddress}>
            <label for="inputBox" className={classes.accountSettingsEditsLabel}>
              Email Address
            </label>
            <input
              className={classes.inputBox}
              name="emailAddress"
              type="text"
              value="jessbrown@gmail.com"
            />
          </form>
          <form className={classes.editUserName}>
            <label for="inputBox" className={classes.accountSettingsEditsLabel}>
              User Name
            </label>
            <input
              className={classes.inputBox}
              name="userName"
              type="text"
              value="JessBrown"
            />
          </form>
          <form className={classes.preferredLanguage}>
            <label for="inputBox" className={classes.accountSettingsEditsLabel}>
              Preferred Language
            </label>
            <input
              className={classes.inputBox}
              name="preferredLanguage"
              type="text"
              value="English"
            />
          </form>
          <span className={classes.moreSettingsEditsLabel}>
            Password
            <KeyboardArrowRightIcon className={classes.arrowRightIcon} />
          </span>
          <Button>Save changes</Button>
          <div className={classes.deleteAccount}>
            <span className={classes.moreSettingsEditsLabel}>
              Delete Account
            </span>
            <p>
              It is possible to{" "}
              <span className={classes.deleteAccountMessage}>
                delete your account
              </span>
              , but it is irreversible. Please be sure that you’d like to do
              that.
            </p>
          </div>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(AccountSettings);
