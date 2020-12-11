import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import { login } from "../actions/auth";
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
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  console.log(user);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
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
          <Button>Submit</Button>
        </FormControl>
      </form>
      <div className={classes.login}>
        <h4
          className={classes.font}
          style={{ textAlign: "center", margin: "0px" }}
        >
          or
        </h4>
        <div className={classes.loginService}>
          <img src={googleIcon} alt="google" className={classes.googleIcon} />
          <h4 className={classes.font} style={{ fontWeight: "800" }}>
            Continue with Google
          </h4>
        </div>
        <h4 className={classes.font} style={{ color: "#717171" }}>
          Dont' have an account?
          <span className={classes.font} style={{ fontWeight: "800" }}>
            {" "}
            Sign up
          </span>
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
  font: {
    fontFamily: "Avenir",
    fontSize: "14px",
    color: "black",
    fontWeight: "500",
  },
}));

export default Login;
