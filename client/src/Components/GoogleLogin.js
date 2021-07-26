import React from "react";
import ReactDOM from "react-dom";

import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="241513642950-4aom6i0o8dglg9j8cdrp4vgvgrp1d4hn.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);

export default { GoogleLogin };
