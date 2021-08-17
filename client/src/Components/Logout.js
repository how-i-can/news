import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully 💖");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
