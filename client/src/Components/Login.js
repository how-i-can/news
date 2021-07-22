import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Avenir } from ".././fonts/AvenirLTStd-Black.ttf";
import FormControl from "@material-ui/core/FormControl";
import { login } from "../actions/auth";
import Input from "./Input";
import Button from "./Button";
import emailIcon from "../images/email.svg";
import passwordIcon from "../images/password.svg";
import googleIcon from "../images/google.svg";
import visibilityIcon from "../images/visibility_off.svg";

const useStyles = makeStyles(() => ({
  loginPage: {
    display: "inline-block",
    margin: "0 auto",
    position: "absolute",
    width: "360px",
    height: "640px",
  },
  form: {
    display: "grid",
    margin: "10px auto",
    width: "70%",
  },
  label: {
    display: "grid",
    fontFamily: { Avenir },
    color: "#717171",
  },
  helperText: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  icon: {
    width: "15px",
    marginRight: "4px",
    filter: "opacity(0.2) drop-shadow(0 0 0 black)",
  },
  loginService: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },
  signupService: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },
  visibilityIcon: {
    filter: "opacity(0.2) drop-shadow(0 0 0 black)",
    width: "20px",
  },
  googleIcon: {
    width: "20px",
    marginRight: "4px",
  },
  font: {
    fontFamily: "Avenir",
    fontSize: "14px",
    color: "black",
    fontWeight: "500",
  },
  or: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    padding: "2px",
  },
  signup: {
    textDecoration: "none",
  },
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (user.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.loginPage}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>Welcome back, Jessica.</h2>
        <h3 className={classes.label}>Keep spreading good vibes</h3>
        <FormControl>
          <label className={classes.label}>
            <div className={classes.helperText}>
              <img src={emailIcon} alt="email" className={classes.icon} />
              Email or Username
            </div>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={classes.label}>
            <div className={classes.helperText}>
              <img src={passwordIcon} alt="password" className={classes.icon} />
              Password
            </div>
            <Input
              name="password"
              type="password"
              value={password}
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
          <h4 className={classes.font} style={{ textAlign: "end" }}>
            Forgot Password?
          </h4>
          <Button>Sign in</Button>
        </FormControl>
      </form>
      <span className={classes.or}>or</span>
      <br />
      <div className={classes.loginService}>
        <img src={googleIcon} alt="google" className={classes.googleIcon} />
        <h4 className={classes.font} style={{ fontWeight: "800" }}>
          Continue with Google
        </h4>
      </div>
      <br />
      <div className={classes.signupService}>
        <h4 className={classes.font} style={{ color: "#717171" }}>
          Don't have an account?
          <Link to="/signup" className={classes.signup}>
            <span className={classes.font} style={{ fontWeight: "800" }}>
              {" "}
              Sign up
            </span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
