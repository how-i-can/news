import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "./Input";
import Button from "./Button";
import emailIcon from "../images/email.svg";
import passwordIcon from "../images/password.svg";
import googleIcon from "../images/google.svg";
import visibilityIcon from "../images/visibility_off.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl>
          <label for="email" className={classes.label}>
            <div className={classes.helperText}>
              <img src={emailIcon} alt="email" className={classes.icon} />
              Email or Username
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label for="password" className={classes.label}>
            <div className={classes.helperText}>
              <img src={passwordIcon} alt="password" className={classes.icon} />
              Password
            </div>
            <Input
              id="password"
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
          <Button>Submit</Button>
        </FormControl>
      </form>
      <div className={classes.login}>
        <h4 style={{ textAlign: "center", margin: "0px", fontWeight: "500" }}>
          or
        </h4>
        <div className={classes.loginService}>
          <img src={googleIcon} alt="google" className={classes.googleIcon} />
          <h4 style={{ fontWeight: "800", fontSize: "14px" }}>
            Continue with Google
          </h4>
        </div>
        <h4 style={{ fontWeight: "500", color: "#717171", fontSize: "14px" }}>
          Dont' have an account?
          <span style={{ color: "black", fontWeight: "800" }}> Sign up</span>
        </h4>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  form: {
    display: "grid",
    margin: "16px auto",
    width: "60%",
  },
  label: {
    display: "grid",
    fontFamily: "Avenir",
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
  login: {
    display: "grid",
    justifyContent: "center",
    fontFamily: "Avenir",
  },
  loginService: {
    display: "flex",
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
}));

export default Login;