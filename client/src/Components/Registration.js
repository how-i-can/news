import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import { register } from "../actions/auth";
import googleIcon from "../images/google.svg";
import Input from "./Input";
import Button from "./Button";
import visibilityIcon from "../images/visibility_off.svg";

const useStyles = makeStyles(styles => ({
  form: {
    marginLeft: "450px",
  },
  label: {
    display: "flex grid",
    fontFamily: "Lato",
    color: "#262626",
    fontWeight: "bold",
  },
  registerMessage: {
    fontFamily: "Lato",
    textAlign: "center",
    fontWeight: "300",
    color: "green",
    marginTop: "64px",
  },
  login: {
    textDecoration: "none",
    fontWeight: "800",
    color: "#2161F3",
  },
  font: {
    fontFamily: "Lato",
    fontSize: "14px",
    color: "black",
  },
  googleIcon: {
    width: "20px",
    marginRight: "4px",
  },
  visibilityIcon: {
    filter: "opacity(0.2) drop-shadow(0 0 0 black)",
    width: "20px",
  },
  h4: {
    display: "flex",
    margin: "0 auto",
    justify: "center",
  },
  signupService: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    fontFamily: "Lato",
  },
}));

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const isRegistered = useSelector(state => state.message);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(email, password, confirmPassword, name)).then(res => {
      console.log("res", res);
    });
  };

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
      direction="column"
    >
      <div>
        <Grid item>
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl>
              <Grid item>
                <h1
                  style={{
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Sign Up
                </h1>
              </Grid>
              <br />
              <Grid item>
                <label className={classes.label}>
                  Your Name
                  <Input
                    name="name"
                    type="text"
                    value={name}
                    fullWidth
                    onChange={e => setName(e.target.value)}
                  />
                </label>
              </Grid>
              <Grid item>
                <label className={classes.label}>
                  Your Email
                  <Input
                    name="email"
                    type="email"
                    value={email}
                    fullWidth
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
              </Grid>
              <Grid item>
                <label className={classes.label}>
                  Password
                  <Input
                    name="password"
                    type="password"
                    value={password}
                    fullWidth
                    onChange={e => setPassword(e.target.value)}
                    inputProps={{
                      endAdornment: (
                        <img
                          src={visibilityIcon}
                          alt="visibility_off"
                          className={classes.visibilityIcon}
                        />
                      ),
                    }}
                  />
                </label>
              </Grid>
              <Grid item>
                <label className={classes.label}>
                  Confirm Password
                  <Input
                    name="password"
                    type="password"
                    value={confirmPassword}
                    fullWidth
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </label>
              </Grid>
              <Grid item align="center">
                <Button>Create a Free Account</Button>
              </Grid>
              <Grid item>
                <div className={classes.login}>
                  <h4
                    className={classes.font}
                    style={{ textAlign: "center", margin: "10px" }}
                  >
                    or
                  </h4>
                  <div className={classes.signupService}>
                    <img
                      src={googleIcon}
                      alt="google"
                      className={classes.googleIcon}
                    />
                    <h4 className={classes.font} style={{ fontWeight: "800" }}>
                      Create account with Google
                    </h4>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <h4
                  className={classes.font}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Already have an account?
                  <Link to="/signin" className={classes.login}>
                    <span> Login</span>
                  </Link>
                </h4>
              </Grid>
            </FormControl>
          </form>
        </Grid>
        {isRegistered && (
          <div>
            <h3 className={classes.registerMessage}>{isRegistered.message}</h3>
          </div>
        )}
      </div>
    </Grid>
  );
};

export default Registration;
