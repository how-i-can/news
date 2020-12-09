import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
}));

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handle, setHandle] = useState("");

  const auth = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(auth);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("EMAIL", email, password, handle);
    dispatch(register(email, password)).then(res => {
      console.log("res", res);
    });
  };

  //console.log("state", email, password, confirmPassword, handle);

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
      </form>
    </div>
  );
};

export default Registration;
