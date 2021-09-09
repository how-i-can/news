import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const styles = () => ({
  AccountDeleted: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: 25,
    height: "100vh",
    width: "100vw",
  },
  checkCircleOutlineIcon: {
    fontSize: 70,
    color: "#D88C9A",
  },
  accountDeletedMessage: {
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: "bold",
  },
  logOutMessage: {
    fontFamily: "Lato",
    fontSize: "16px",
    color: "#717171",
  },
});

class AccountDeleted extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.AccountDeleted}>
        <CheckCircleOutlineIcon className={classes.checkCircleOutlineIcon} />
        <h1 className={classes.accountDeletedMessage}>Account Deleted</h1>
        <span className={classes.logOutMessage}>
          You will be logged out automatically
        </span>
      </div>
    );
  }
}
export default withStyles(styles)(AccountDeleted);
