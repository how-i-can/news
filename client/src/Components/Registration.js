import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import { register } from "../actions/auth";
import Input from "./Input";
import Button from "./Button";

const useStyles = makeStyles(() => ({
  form: {
    display: "grid",
    margin: "0 auto",
    width: "60%",
  },
  label: {
    display: "grid",
    fontFamily: "Avenir",
    color: "#717171",
  },
  registerMessage: {
    fontFamily: "Avenir",
    textAlign: "center",
    fontWeight: "300",
    color: "green",
    marginTop: "64px",
  },
  login: {
    textDecoration: "none",
    fontWeight: "800",
  },
  font: {
    fontFamily: "Avenir",
    fontSize: "14px",
    color: "black",
    fontWeight: "500",
  },
}));

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handle, setHandle] = useState("");

  const isRegistered = useSelector(state => state.message);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(email, password, confirmPassword, handle)).then(res => {
      console.log("res", res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl>
          <label className={classes.label}>
            Email
            <Input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={classes.label}>
            Password
            <Input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <label className={classes.label}>
            Confirm Password
            <Input
              name="password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </label>
          <label className={classes.label}>
            Handle
            <Input
              name="handle"
              type="text"
              value={handle}
              onChange={e => setHandle(e.target.value)}
            />
          </label>
          <Button>Submit</Button>
        </FormControl>
        <h4
          className={classes.font}
          style={{ color: "#717171", textAlign: "center" }}
        >
          Already have an account?
          <Link to="/signin" className={classes.login}>
            <span className={classes.font}> Login</span>
          </Link>
        </h4>
      </form>
      {isRegistered && (
        <div>
          <h3 className={classes.registerMessage}>{isRegistered.message}</h3>
        </div>
      )}
    </div>
  );
};

export default Registration;
