import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import { login } from "../actions/auth";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import Button from "./Button";
import emailIcon from "../images/email.svg";
import passwordIcon from "../images/password.svg";
import visibilityIcon from "../images/visibility_off.svg";
import { refreshTokenSetup } from "../utils/refreshToken";

const useStyles = makeStyles(() => ({
  loginPage: {
    display: "inline-block",
    marginLeft: "450px",
    position: "absolute",
    width: "360px",
    height: "640px",
    justifyContent: "center",
  },
  form: {
    display: "grid",
    margin: "10px auto",
    width: "100%",
  },
  label: {
    display: "grid",
    fontFamily: "Lato",
    color: "#717171",
  },
  helperText: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    fontFamily: "Lato",
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
    fontFamily: "Lato",
  },
  signupService: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    fontFamily: "Lato",
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
    fontFamily: "Lato",
    fontSize: "14px",
    color: "black",
    fontWeight: "bold",
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

  const onSuccess = res => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = res => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  return (
    <div className={classes.loginPage}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>Welcome back, Jessica.</h2>
        <h3 className={classes.label}>Keep spreading good vibes</h3>
        <br />
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
          <Button className={classes.font}>Sign in</Button>
        </FormControl>
      </form>
      <span className={classes.or}>or</span>
      <br />
        <div className={classes.loginService}>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
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
