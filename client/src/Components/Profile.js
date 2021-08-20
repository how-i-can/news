import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";

const styles = () => ({
  Profile: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    padding: 25,
  },
  profilePhoto: {
    display: "flex",
    justifyContent: "space-around",
    margin: 18,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  userName: {
    display: "inline-flex",
    justifyContent: "space-around",
    margin: 18,
    fontWeight: 800,
  },
  handleName: {
    display: "inline-flex",
    justifyContent: "space-around",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
  },
  profileBio: {
    display: "inline-flex",
    textAlign: "left",
    margin: 18,
    fontSize: 16,
  },
  newsCount: {
    display: "inline-flex",
    margin: 18,
    color: "#717171",
  },
  editProfile: {
    display: "inline-flex",
    margin: 18,
    fontWeight: "bold",
  },
  accountSettings: {
    display: "inline-flex",
    margin: 18,
    fontWeight: "bold",
  },
  signOut: {
    display: "inline-flex",
    margin: 18,
    fontWeight: "bold",
  },
  editIcon: {
    display: "inline-flex",
    marginLeft: 18,
  },
  settingsOutlinedIcon: {
    display: "inline-flex",
    marginLeft: 18,
  },
  powerSettingsNewOutlinedIcon: {
    display: "inline-flex",
    marginLeft: 18,
  },
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Profile}>
        <Card>
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
          <div>
            <span className={classes.handleName}>@Jessbrown</span>
          </div>
          <div>
            <p className={classes.profileBio}>
              {" "}
              Hi, my name is Jess. I'm a photographer. I enjoy spending time
              with family.{" "}
            </p>
          </div>
          <div>
            <span className={classes.newsCount}>140 Good News</span>
          </div>
          <hr />
          <div>
            <EditIcon className={classes.editIcon} />
            <span className={classes.editProfile}>EDIT PROFILE</span>
          </div>
          <div>
            <SettingsOutlinedIcon className={classes.settingsOutlinedIcon} />
            <span className={classes.accountSettings}>ACCOUNT SETTINGS</span>
          </div>
          <div>
            <PowerSettingsNewOutlinedIcon
              className={classes.powerSettingsNewOutlinedIcon}
            />
            <span className={classes.signOut}>SIGN OUT</span>
          </div>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Profile);
