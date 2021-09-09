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
  personalInformation: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 800,
  },
  fullName: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "left",
    height: "50",
  },
  fullNameLabel: {
    display: "inline-flex",
    justifyContent: "left",
    textAlign: "left",
    alignItems: "left",
    margin: 18,
    fontWeight: 500,
    color: "#717171",
  },
  editBioLabel: {
    display: "inline-flex",
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
    flexDirection: "column",
  },
  birthdayPart: {
    display: "flex",
    flexDirection: "row",
  },
  editLocationLabel: {
    display: "inline-flex",
    justifyContent: "space-around",
    textAlign: "left",
    fontWeight: 500,
    color: "#717171",
  },
  arrowBackIcon: {
    fontSize: 30,
    margin: 5,
    cursor: "pointer",
  },
});

class EditProfile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Profile}>
        <Card className={classes.profileCard}>
          <ArrowBackIcon className={classes.arrowBackIcon} />
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
          <table className={classes.editLocation}>
            <thead>
              <tr>
                <th colspan="6" className={classes.editLocationLabel}>
                  Location
                </th>
              </tr>
            </thead>
            <tbody className={classes.birthdayDate}>
              <tr className={classes.birthdayPart}>
                <td class="dropdown">
                  Country
                  <form
                    action=""
                    name="FILTER"
                    className={classes.inputBoxNumbers}
                  >
                    <select name="filter_for">
                      <option value="Nigeria">Nigeria</option>
                    </select>
                  </form>
                </td>
                <td class="dropdown">
                  City
                  <form
                    action=""
                    name="FILTER"
                    className={classes.inputBoxNumbers}
                  >
                    <select name="filter_for">
                      <option value="Lagos">Lagos</option>
                    </select>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <Button>Save changes</Button>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(EditProfile);
