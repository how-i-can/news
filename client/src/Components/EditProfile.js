import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const styles = () => ({
  Profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    paddingTop: 20,
    paddingLeft: 420,
  },
  profileCard: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    paddingLeft: 50,
  },
  profilePhoto: {
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  changePhoto: {
    textAlign: "center",
  },
  personalInformation: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    margin: 18,
    fontWeight: 800,
  },
  fullName: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50",
  },
  fullNameLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
  },
  editBioLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    fontWeight: 500,
    color: "#717171",
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
  inputBox: {
    backgroundColor: "#F6F6F6",
    border: "none",
    margin: 10,
    fontFamily: "Lato",
    fontSize: 16,
  },
  inputBoxNumbers: {
    backgroundColor: "#F6F6F6",
    border: "none",
    margin: 10,
    fontFamily: "Lato",
    fontSize: 16,
    maxWidth: 50,
  },
  editBio: {
    display: "inline-flex",
    flexDirection: "column",
  },
  textArea: {
    backgroundColor: "#F6F6F6",
    border: "none",
    margin: 10,
    fontFamily: "Lato",
    fontSize: 16,
    height: 100,
  },
  editBirthdayLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    fontWeight: 500,
    color: "#717171",
  },
  birthdayDate: {
    display: "inline-flex",
    flexDirection: "row",
  },
  birthdayPart: {
    display: "inline-flex",
    flexDirection: "column",
  },
});

class EditProfile extends Component {
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
          <div>
            <h4 className={classes.personalInformation}>
              PERSONAL INFORMATION
            </h4>
          </div>
          <form className={classes.fullName}>
            <label for="inputBox" className={classes.fullNameLabel}>
              Full Name
            </label>
            <input
              className={classes.inputBox}
              name="fullName"
              type="text"
              value="Jessica Brown"
            />
          </form>
          <form className={classes.editBio}>
            <label for="textArea" className={classes.editBioLabel}>
              Bio
            </label>
            <textarea
              className={classes.textArea}
              name="bio"
              type="text"
              value="Hi, my name is Jess, I’m a photographer. I enjoy spending time with family."
            />
          </form>
          <table className={classes.editBirthday}>
            <thead>
              <tr>
                <th colspan="3" className={classes.editBirthdayLabel}>
                  Birthday
                </th>
              </tr>
            </thead>
            <tbody className={classes.birthdayDate}>
              <tr className={classes.birthdayPart}>
                <td>Month</td>
                <input
                  className={classes.inputBoxNumbers}
                  name="month"
                  type="text"
                  value="05"
                />
                <td>Day</td>
                <input
                  className={classes.inputBoxNumbers}
                  name="day"
                  type="text"
                  value="22"
                />
                <td>Year</td>
                <input
                  className={classes.inputBoxNumbers}
                  name="year"
                  type="text"
                  value="1994"
                />
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(EditProfile);
